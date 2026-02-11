export const SOCIAL = {
    whatsapp: {
        url: "https://wa.me/5519996599430",
        label: "+55 19 99659-9430",
        active: true, // Defina como false para ocultar
    },
    facebook: {
        url: "https://www.facebook.com/nexis",
        active: false,
    },
    instagram: {
        url: "https://www.instagram.com/nexis_hub/",
        active: true,
    },
    linkedin: {
        url: "https://www.linkedin.com/company/nexis",
        active: false,
    },
    email: {
        url: "mailto:atendimento.nexis@gmail.com",
        label: "atendimento.nexis@gmail.com",
        active: true,
    },
    maps: {
        url: "https://maps.google.com/?q=Americana,São+Paulo,SP",
        label: "Americana, São Paulo, SP",
        active: false,
    }
};

// CONTACT_INFO serve para dados que exigem estrutura de exibição mais complexa,
// como endereços que precisam ser quebrados em múltiplas linhas, ou formatados de jeito específico
// que não cabe numa simples String de URL.
export const CONTACT_INFO = {
    address: {
        raw: "Americana, São Paulo, SP",
        label: ["Americana", "São Paulo, SP"],
        active: true,
    }
};
