export type ConversionContent = {
  title: string;
  description: string;
  benefits: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export type ConversionContents = {
  [key: string]: {
    [key: string]: ConversionContent;
  };
};

// Estrutura: primeiro nível é o formato de entrada_saída, segundo nível é o idioma
export const conversionContents: ConversionContents = {
  "webp_png": {
    "en": {
      title: "Convert WEBP to PNG",
      description: "Transform your WEBP images into high-quality PNG format while maintaining image quality. PNG format is widely supported and perfect for images that need transparency.",
      benefits: [
        "Maintain image quality",
        "Preserve transparency",
        "Wide compatibility",
        "Perfect for web graphics",
        "No loss of detail"
      ],
      faq: [
        {
          question: "Why convert WEBP to PNG?",
          answer: "Converting WEBP to PNG is useful when you need broader compatibility across different platforms and software, or when you need to edit the image in programs that don't support WEBP."
        },
        {
          question: "Will I lose quality during conversion?",
          answer: "No, our conversion process maintains the original image quality. PNG is a lossless format, ensuring your images remain crisp and clear."
        },
        {
          question: "What's the maximum file size I can convert?",
          answer: "You can convert WEBP files up to 50MB in size. For larger files, we recommend splitting them or using our bulk compression tool first."
        },
        {
          question: "Can I convert multiple images at once?",
          answer: "Yes! Our converter supports batch conversion, allowing you to convert multiple WEBP images to PNG simultaneously."
        },
        {
          question: "Are my images kept private?",
          answer: "Absolutely. All conversions happen in your browser, and we don't store any of your images on our servers."
        }
      ]
    },
    "pt": {
      title: "Converter WEBP para PNG",
      description: "Transforme suas imagens WEBP em formato PNG de alta qualidade mantendo a qualidade da imagem. O formato PNG é amplamente suportado e perfeito para imagens que precisam de transparência.",
      benefits: [
        "Mantém a qualidade da imagem",
        "Preserva a transparência",
        "Ampla compatibilidade",
        "Perfeito para gráficos web",
        "Sem perda de detalhes"
      ],
      faq: [
        {
          question: "Por que converter WEBP para PNG?",
          answer: "Converter WEBP para PNG é útil quando você precisa de maior compatibilidade entre diferentes plataformas e softwares, ou quando precisa editar a imagem em programas que não suportam WEBP."
        },
        {
          question: "Vou perder qualidade durante a conversão?",
          answer: "Não, nosso processo de conversão mantém a qualidade original da imagem. PNG é um formato sem perdas, garantindo que suas imagens permaneçam nítidas e claras."
        },
        {
          question: "Qual o tamanho máximo de arquivo que posso converter?",
          answer: "Você pode converter arquivos WEBP de até 50MB. Para arquivos maiores, recomendamos dividi-los ou usar nossa ferramenta de compressão em massa primeiro."
        },
        {
          question: "Posso converter várias imagens de uma vez?",
          answer: "Sim! Nosso conversor suporta conversão em lote, permitindo que você converta várias imagens WEBP para PNG simultaneamente."
        },
        {
          question: "Minhas imagens são mantidas privadas?",
          answer: "Absolutamente. Todas as conversões acontecem em seu navegador, e não armazenamos nenhuma de suas imagens em nossos servidores."
        }
      ]
    }
  }
};