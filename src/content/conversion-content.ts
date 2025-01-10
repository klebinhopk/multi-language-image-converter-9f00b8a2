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
  },
  "jpg_png": {
    "en": {
      title: "Convert JPG to PNG",
      description: "Transform your JPG images into high-quality PNG format. Perfect for when you need transparency and lossless quality.",
      benefits: [
        "Lossless conversion",
        "Add transparency support",
        "Better quality for graphics",
        "Perfect for web and print",
        "Maintain image details"
      ],
      faq: [
        {
          question: "Why convert JPG to PNG?",
          answer: "Converting JPG to PNG is useful when you need transparency or want to avoid further quality loss in image editing."
        },
        {
          question: "Will the image quality improve?",
          answer: "While PNG won't improve the original JPG quality, it will prevent any further quality loss in subsequent edits."
        },
        {
          question: "What's the maximum file size?",
          answer: "You can convert JPG files up to 50MB in size. For larger files, consider using our compression tool first."
        },
        {
          question: "Can I batch convert images?",
          answer: "Yes! Our converter supports batch conversion of multiple JPG images to PNG format."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, all conversions happen in your browser. We don't store or transmit your images to any servers."
        }
      ]
    },
    "pt": {
      title: "Converter JPG para PNG",
      description: "Transforme suas imagens JPG em formato PNG de alta qualidade. Perfeito quando você precisa de transparência e qualidade sem perdas.",
      benefits: [
        "Conversão sem perdas",
        "Suporte a transparência",
        "Melhor qualidade para gráficos",
        "Perfeito para web e impressão",
        "Mantém os detalhes da imagem"
      ],
      faq: [
        {
          question: "Por que converter JPG para PNG?",
          answer: "Converter JPG para PNG é útil quando você precisa de transparência ou quer evitar perdas adicionais de qualidade na edição de imagens."
        },
        {
          question: "A qualidade da imagem vai melhorar?",
          answer: "Embora o PNG não melhore a qualidade original do JPG, ele evitará qualquer perda adicional de qualidade em edições subsequentes."
        },
        {
          question: "Qual o tamanho máximo do arquivo?",
          answer: "Você pode converter arquivos JPG de até 50MB. Para arquivos maiores, considere usar nossa ferramenta de compressão primeiro."
        },
        {
          question: "Posso converter várias imagens?",
          answer: "Sim! Nosso conversor suporta conversão em lote de múltiplas imagens JPG para formato PNG."
        },
        {
          question: "Meus dados estão seguros?",
          answer: "Sim, todas as conversões acontecem no seu navegador. Não armazenamos nem transmitimos suas imagens para nenhum servidor."
        }
      ]
    }
  },
  "gif_png": {
    "en": {
      title: "Convert GIF to PNG",
      description: "Convert your GIF images to PNG format. Ideal for extracting still frames from animated GIFs with high quality.",
      benefits: [
        "Extract high-quality frames",
        "Preserve image details",
        "Support for transparency",
        "Better for editing",
        "Smaller file size for single frames"
      ],
      faq: [
        {
          question: "Can I convert animated GIFs?",
          answer: "Yes, but PNG format will only save the first frame of the animated GIF. For animations, consider keeping the original GIF format."
        },
        {
          question: "Will I lose quality?",
          answer: "No, PNG is a lossless format and will preserve the quality of the GIF frame you're converting."
        },
        {
          question: "What's the file size limit?",
          answer: "You can convert GIF files up to 50MB in size. Larger files may need to be compressed first."
        },
        {
          question: "Can I convert multiple GIFs at once?",
          answer: "Yes! Our converter supports batch conversion of multiple GIF images to PNG format."
        },
        {
          question: "Is the conversion secure?",
          answer: "Absolutely. All conversions happen locally in your browser, ensuring your images remain private."
        }
      ]
    },
    "pt": {
      title: "Converter GIF para PNG",
      description: "Converta suas imagens GIF para formato PNG. Ideal para extrair quadros estáticos de GIFs animados com alta qualidade.",
      benefits: [
        "Extrai quadros em alta qualidade",
        "Preserva detalhes da imagem",
        "Suporte a transparência",
        "Melhor para edição",
        "Menor tamanho para quadros únicos"
      ],
      faq: [
        {
          question: "Posso converter GIFs animados?",
          answer: "Sim, mas o formato PNG salvará apenas o primeiro quadro do GIF animado. Para animações, considere manter o formato GIF original."
        },
        {
          question: "Vou perder qualidade?",
          answer: "Não, PNG é um formato sem perdas e preservará a qualidade do quadro GIF que você está convertendo."
        },
        {
          question: "Qual o limite de tamanho do arquivo?",
          answer: "Você pode converter arquivos GIF de até 50MB. Arquivos maiores podem precisar ser comprimidos primeiro."
        },
        {
          question: "Posso converter vários GIFs de uma vez?",
          answer: "Sim! Nosso conversor suporta conversão em lote de múltiplas imagens GIF para formato PNG."
        },
        {
          question: "A conversão é segura?",
          answer: "Absolutamente. Todas as conversões acontecem localmente no seu navegador, garantindo que suas imagens permaneçam privadas."
        }
      ]
    }
  },
  "png_jpg": {
    "en": {
      title: "Convert PNG to JPG",
      description: "Convert your PNG images to JPG format. Perfect for reducing file size while maintaining good visual quality.",
      benefits: [
        "Smaller file sizes",
        "Wider compatibility",
        "Good for photographs",
        "Faster loading times",
        "Efficient storage"
      ],
      faq: [
        {
          question: "Will I lose transparency?",
          answer: "Yes, JPG doesn't support transparency. Transparent areas will be converted to a white background by default."
        },
        {
          question: "How's the quality affected?",
          answer: "JPG uses lossy compression, but our converter optimizes the balance between quality and file size."
        },
        {
          question: "What's the size limit?",
          answer: "You can convert PNG files up to 50MB in size. Larger files may need to be compressed first."
        },
        {
          question: "Can I convert multiple files?",
          answer: "Yes! Our converter supports batch conversion of multiple PNG images to JPG format."
        },
        {
          question: "Are my images secure?",
          answer: "Yes, all conversions happen in your browser. We don't store or transmit your images."
        }
      ]
    },
    "pt": {
      title: "Converter PNG para JPG",
      description: "Converta suas imagens PNG para formato JPG. Perfeito para reduzir o tamanho do arquivo mantendo boa qualidade visual.",
      benefits: [
        "Arquivos menores",
        "Maior compatibilidade",
        "Bom para fotografias",
        "Carregamento mais rápido",
        "Armazenamento eficiente"
      ],
      faq: [
        {
          question: "Vou perder a transparência?",
          answer: "Sim, JPG não suporta transparência. Áreas transparentes serão convertidas para fundo branco por padrão."
        },
        {
          question: "Como a qualidade é afetada?",
          answer: "JPG usa compressão com perdas, mas nosso conversor otimiza o equilíbrio entre qualidade e tamanho do arquivo."
        },
        {
          question: "Qual o limite de tamanho?",
          answer: "Você pode converter arquivos PNG de até 50MB. Arquivos maiores podem precisar ser comprimidos primeiro."
        },
        {
          question: "Posso converter vários arquivos?",
          answer: "Sim! Nosso conversor suporta conversão em lote de múltiplas imagens PNG para formato JPG."
        },
        {
          question: "Minhas imagens estão seguras?",
          answer: "Sim, todas as conversões acontecem no seu navegador. Não armazenamos nem transmitimos suas imagens."
        }
      ]
    }
  },
  "png_webp": {
    "en": {
      title: "Convert PNG to WebP",
      description: "Transform your PNG images into WebP format for superior compression and quality. Ideal for web optimization.",
      benefits: [
        "Smaller file sizes",
        "Better compression",
        "Maintains quality",
        "Support for transparency",
        "Perfect for web use"
      ],
      faq: [
        {
          question: "Why choose WebP?",
          answer: "WebP offers better compression than PNG while maintaining high quality, making it perfect for web images."
        },
        {
          question: "Will I lose quality?",
          answer: "WebP provides excellent quality while significantly reducing file size compared to PNG."
        },
        {
          question: "What's the file size limit?",
          answer: "You can convert PNG files up to 50MB in size. Larger files may need to be compressed first."
        },
        {
          question: "Can I batch convert images?",
          answer: "Yes! Our converter supports batch conversion of multiple PNG images to WebP format."
        },
        {
          question: "Is the conversion secure?",
          answer: "Yes, all conversions happen in your browser. We don't store or transmit your images."
        }
      ]
    },
    "pt": {
      title: "Converter PNG para WebP",
      description: "Transforme suas imagens PNG em formato WebP para compressão e qualidade superiores. Ideal para otimização web.",
      benefits: [
        "Arquivos menores",
        "Melhor compressão",
        "Mantém a qualidade",
        "Suporte a transparência",
        "Perfeito para uso web"
      ],
      faq: [
        {
          question: "Por que escolher WebP?",
          answer: "WebP oferece melhor compressão que PNG mantendo alta qualidade, tornando-o perfeito para imagens web."
        },
        {
          question: "Vou perder qualidade?",
          answer: "WebP fornece excelente qualidade enquanto reduz significativamente o tamanho do arquivo em comparação com PNG."
        },
        {
          question: "Qual o limite de tamanho do arquivo?",
          answer: "Você pode converter arquivos PNG de até 50MB. Arquivos maiores podem precisar ser comprimidos primeiro."
        },
        {
          question: "Posso converter várias imagens?",
          answer: "Sim! Nosso conversor suporta conversão em lote de múltiplas imagens PNG para formato WebP."
        },
        {
          question: "A conversão é segura?",
          answer: "Sim, todas as conversões acontecem no seu navegador. Não armazenamos nem transmitimos suas imagens."
        }
      ]
    }
  }
};
