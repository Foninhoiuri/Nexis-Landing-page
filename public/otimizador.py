import os
import shutil
from PIL import Image

def otimizar_imagens_recursivo(pasta_raiz='.', largura_maxima=1200, qualidade=80):
    # Nome da pasta onde os backups intocados ficarão
    nome_pasta_backup = 'backup_imagens_originais'
    caminho_backup = os.path.join(pasta_raiz, nome_pasta_backup)

    formatos_suportados = ('.jpg', '.jpeg', '.png')
    contador = 0

    # Cria a pasta de backup raiz se não existir
    if not os.path.exists(caminho_backup):
        os.makedirs(caminho_backup)

    print(f"Iniciando automação na pasta: {os.path.abspath(pasta_raiz)}")
    print(f"Backups serão salvos em: {os.path.abspath(caminho_backup)}\n")

    # os.walk percorre a pasta atual e todas as subpastas
    for root, dirs, files in os.walk(pasta_raiz):
        
        # Ignora a pasta de backup para o script não processar as imagens salvas lá dentro
        if nome_pasta_backup in dirs:
            dirs.remove(nome_pasta_backup)

        for nome_arquivo in files:
            if nome_arquivo.lower().endswith(formatos_suportados):
                caminho_original = os.path.join(root, nome_arquivo)
                
                # 1. Cria a estrutura de pastas no backup espelhando a original
                caminho_relativo = os.path.relpath(root, pasta_raiz)
                pasta_destino_backup = os.path.join(caminho_backup, caminho_relativo)
                
                if not os.path.exists(pasta_destino_backup):
                    os.makedirs(pasta_destino_backup)

                caminho_arquivo_backup = os.path.join(pasta_destino_backup, nome_arquivo)

                try:
                    # 2. Copia o arquivo original intacto para o backup
                    shutil.copy2(caminho_original, caminho_arquivo_backup)

                    # 3. Abre, otimiza e salva a imagem
                    # O bloco 'with' garante que o arquivo seja fechado da memória após o uso
                    with Image.open(caminho_original) as img:
                        if img.width > largura_maxima:
                            proporcao = largura_maxima / float(img.width)
                            altura_nova = int(float(img.height) * float(proporcao))
                            img = img.resize((largura_maxima, altura_nova), Image.Resampling.LANCZOS)

                        # 4. Salva a nova imagem em WebP na MESMA subpasta original
                        nome_sem_extensao = os.path.splitext(nome_arquivo)[0]
                        caminho_novo_webp = os.path.join(root, f"{nome_sem_extensao}.webp")
                        
                        img.save(caminho_novo_webp, 'webp', optimize=True, quality=qualidade)
                    
                    # 5. Remove a imagem original pesada (A troca foi concluída)
                    os.remove(caminho_original)
                    
                    # Calcula a diferença de tamanho para o log
                    tamanho_velho = os.path.getsize(caminho_arquivo_backup) / 1024
                    tamanho_novo = os.path.getsize(caminho_novo_webp) / 1024
                    
                    # Formata o caminho relativo para ficar limpo no terminal
                    caminho_limpo = os.path.join(caminho_relativo, nome_arquivo).replace('.\\', '')
                    print(f"✅ Trocado: {caminho_limpo}")
                    print(f"   └─ {tamanho_velho:.1f}KB -> {tamanho_novo:.1f}KB (WebP)")
                    contador += 1
                    
                except Exception as e:
                    print(f"❌ Erro ao processar {caminho_original}: {e}")

    print(f"\n🚀 Automação concluída! {contador} imagens substituídas por WebP. Backups preservados em '{nome_pasta_backup}'.")

# Executa o script apontando para a pasta atual ('.')
if __name__ == "__main__":
    otimizar_imagens_recursivo(pasta_raiz='.')