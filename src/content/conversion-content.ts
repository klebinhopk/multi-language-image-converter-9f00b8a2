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
    },
    "es": {
      title: "Convertir WEBP a PNG",
      description: "Transforma tus imágenes WEBP en formato PNG de alta calidad manteniendo la calidad de la imagen. El formato PNG es ampliamente compatible y perfecto para imágenes que necesitan transparencia.",
      benefits: [
        "Mantiene la calidad de la imagen",
        "Preserva la transparencia",
        "Amplia compatibilidad",
        "Perfecto para gráficos web",
        "Sin pérdida de detalles"
      ],
      faq: [
        {
          question: "¿Por qué convertir WEBP a PNG?",
          answer: "Convertir WEBP a PNG es útil cuando necesitas mayor compatibilidad entre diferentes plataformas y software, o cuando necesitas editar la imagen en programas que no soportan WEBP."
        },
        {
          question: "¿Perderé calidad durante la conversión?",
          answer: "No, nuestro proceso de conversión mantiene la calidad original de la imagen. PNG es un formato sin pérdidas, asegurando que tus imágenes permanezcan nítidas y claras."
        },
        {
          question: "¿Cuál es el tamaño máximo de archivo que puedo convertir?",
          answer: "Puedes convertir archivos WEBP de hasta 50MB. Para archivos más grandes, recomendamos dividirlos o usar nuestra herramienta de compresión en masa primero."
        },
        {
          question: "¿Puedo convertir varias imágenes a la vez?",
          answer: "¡Sí! Nuestro convertidor soporta la conversión por lotes, permitiéndote convertir varias imágenes WEBP a PNG simultáneamente."
        },
        {
          question: "¿Mis imágenes se mantienen privadas?",
          answer: "Absolutamente. Todas las conversiones ocurren en tu navegador, y no almacenamos ninguna de tus imágenes en nuestros servidores."
        }
      ]
    },
    "fr": {
      title: "Convertir WEBP en PNG",
      description: "Transformez vos images WEBP en format PNG haute qualité tout en maintenant la qualité de l'image. Le format PNG est largement pris en charge et parfait pour les images nécessitant de la transparence.",
      benefits: [
        "Maintient la qualité de l'image",
        "Préserve la transparence",
        "Large compatibilité",
        "Parfait pour les graphiques web",
        "Aucune perte de détails"
      ],
      faq: [
        {
          question: "Pourquoi convertir WEBP en PNG ?",
          answer: "La conversion de WEBP en PNG est utile lorsque vous avez besoin d'une meilleure compatibilité entre différentes plateformes et logiciels, ou lorsque vous devez éditer l'image dans des programmes qui ne prennent pas en charge WEBP."
        },
        {
          question: "Vais-je perdre en qualité pendant la conversion ?",
          answer: "Non, notre processus de conversion maintient la qualité originale de l'image. PNG est un format sans perte, garantissant que vos images restent nettes et claires."
        },
        {
          question: "Quelle est la taille maximale de fichier que je peux convertir ?",
          answer: "Vous pouvez convertir des fichiers WEBP jusqu'à 50 Mo. Pour les fichiers plus volumineux, nous recommandons de les diviser ou d'utiliser d'abord notre outil de compression en masse."
        },
        {
          question: "Puis-je convertir plusieurs images à la fois ?",
          answer: "Oui ! Notre convertisseur prend en charge la conversion par lots, vous permettant de convertir plusieurs images WEBP en PNG simultanément."
        },
        {
          question: "Mes images sont-elles gardées privées ?",
          answer: "Absolument. Toutes les conversions se font dans votre navigateur, et nous ne stockons aucune de vos images sur nos serveurs."
        }
      ]
    },
    "de": {
      title: "WEBP in PNG umwandeln",
      description: "Wandeln Sie Ihre WEBP-Bilder in hochwertiges PNG-Format um und behalten Sie dabei die Bildqualität bei. Das PNG-Format wird weithin unterstützt und ist perfekt für Bilder, die Transparenz benötigen.",
      benefits: [
        "Behält die Bildqualität bei",
        "Bewahrt Transparenz",
        "Breite Kompatibilität",
        "Perfekt für Webgrafiken",
        "Keine Detailverluste"
      ],
      faq: [
        {
          question: "Warum WEBP in PNG umwandeln?",
          answer: "Die Umwandlung von WEBP in PNG ist nützlich, wenn Sie eine bessere Kompatibilität zwischen verschiedenen Plattformen und Software benötigen oder wenn Sie das Bild in Programmen bearbeiten müssen, die WEBP nicht unterstützen."
        },
        {
          question: "Verliere ich Qualität bei der Umwandlung?",
          answer: "Nein, unser Umwandlungsprozess behält die ursprüngliche Bildqualität bei. PNG ist ein verlustfreies Format, das sicherstellt, dass Ihre Bilder scharf und klar bleiben."
        },
        {
          question: "Was ist die maximale Dateigröße, die ich umwandeln kann?",
          answer: "Sie können WEBP-Dateien bis zu 50MB umwandeln. Für größere Dateien empfehlen wir, sie zu teilen oder zuerst unser Massenkomprimierungstool zu verwenden."
        },
        {
          question: "Kann ich mehrere Bilder gleichzeitig umwandeln?",
          answer: "Ja! Unser Konverter unterstützt Stapelumwandlung, sodass Sie mehrere WEBP-Bilder gleichzeitig in PNG umwandeln können."
        },
        {
          question: "Bleiben meine Bilder privat?",
          answer: "Absolut. Alle Umwandlungen finden in Ihrem Browser statt, und wir speichern keine Ihrer Bilder auf unseren Servern."
        }
      ]
    },
    "it": {
      title: "Converti WEBP in PNG",
      description: "Trasforma le tue immagini WEBP in formato PNG di alta qualità mantenendo la qualità dell'immagine. Il formato PNG è ampiamente supportato e perfetto per le immagini che necessitano di trasparenza.",
      benefits: [
        "Mantiene la qualità dell'immagine",
        "Preserva la trasparenza",
        "Ampia compatibilità",
        "Perfetto per la grafica web",
        "Nessuna perdita di dettagli"
      ],
      faq: [
        {
          question: "Perché convertire WEBP in PNG?",
          answer: "Convertire WEBP in PNG è utile quando hai bisogno di una maggiore compatibilità tra diverse piattaforme e software, o quando devi modificare l'immagine in programmi che non supportano WEBP."
        },
        {
          question: "Perderò qualità durante la conversione?",
          answer: "No, il nostro processo di conversione mantiene la qualità originale dell'immagine. PNG è un formato senza perdita, garantendo che le tue immagini rimangano nitide e chiare."
        },
        {
          question: "Qual è la dimensione massima del file che posso convertire?",
          answer: "Puoi convertire file WEBP fino a 50MB. Per file più grandi, consigliamo di dividerli o utilizzare prima il nostro strumento di compressione di massa."
        },
        {
          question: "Posso convertire più immagini contemporaneamente?",
          answer: "Sì! Il nostro convertitore supporta la conversione batch, permettendoti di convertire più immagini WEBP in PNG simultaneamente."
        },
        {
          question: "Le mie immagini vengono mantenute private?",
          answer: "Assolutamente. Tutte le conversioni avvengono nel tuo browser e non memorizziamo nessuna delle tue immagini sui nostri server."
        }
      ]
    },
    "ja": {
      title: "WEBPからPNGに変換",
      description: "WEBP画像を高品質なPNG形式に変換し、画質を維持します。PNG形式は広くサポートされており、透過が必要な画像に最適です。",
      benefits: [
        "画質を維持",
        "透過を保持",
        "幅広い互換性",
        "Web画像に最適",
        "詳細の損失なし"
      ],
      faq: [
        {
          question: "なぜWEBPをPNGに変換するのですか？",
          answer: "WEBPからPNGへの変換は、異なるプラットフォームやソフトウェア間での互換性が必要な場合や、WEBPをサポートしていないプログラムで画像を編集する必要がある場合に便利です。"
        },
        {
          question: "変換中に品質は失われますか？",
          answer: "いいえ、当社の変換プロセスは元の画質を維持します。PNGは可逆形式で、画像の鮮明さと明瞭さを確保します。"
        },
        {
          question: "変換できる最大ファイルサイズは？",
          answer: "50MBまでのWEBPファイルを変換できます。より大きなファイルの場合は、分割するか、まず一括圧縮ツールの使用をお勧めします。"
        },
        {
          question: "複数の画像を一度に変換できますか？",
          answer: "はい！当社のコンバーターは一括変換をサポートしており、複数のWEBP画像を同時にPNGに変換できます。"
        },
        {
          question: "画像のプライバシーは保護されますか？",
          answer: "もちろんです。すべての変換はブラウザ内で行われ、お客様の画像を当社のサーバーに保存することはありません。"
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
    },
    "es": {
      title: "Convertir JPG a PNG",
      description: "Transforma tus imágenes JPG en formato PNG de alta calidad. Perfecto para cuando necesitas transparencia y calidad sin pérdidas.",
      benefits: [
        "Conversión sin pérdidas",
        "Agregar soporte de transparencia",
        "Mejor calidad para gráficos",
        "Perfecto para web e impresión",
        "Mantener los detalles de la imagen"
      ],
      faq: [
        {
          question: "¿Por qué convertir JPG a PNG?",
          answer: "Convertir JPG a PNG es útil cuando necesitas transparencia o quieres evitar más pérdidas de calidad en la edición de imágenes."
        },
        {
          question: "¿Mejorará la calidad de la imagen?",
          answer: "Aunque PNG no mejorará la calidad original de JPG, evitará cualquier pérdida adicional de calidad en ediciones posteriores."
        },
        {
          question: "¿Cuál es el tamaño máximo del archivo?",
          answer: "Puedes convertir archivos JPG de hasta 50MB. Para archivos más grandes, considera usar nuestra herramienta de compresión primero."
        },
        {
          question: "¿Puedo convertir varias imágenes?",
          answer: "¡Sí! Nuestro convertidor soporta la conversión por lotes de múltiples imágenes JPG a formato PNG."
        },
        {
          question: "¿Mis datos son seguros?",
          answer: "Sí, todas las conversiones ocurren en tu navegador. No almacenamos ni transmitimos tus imágenes a ningún servidor."
        }
      ]
    },
    "fr": {
      title: "Convertir JPG en PNG",
      description: "Transformez vos images JPG en format PNG haute qualité. Parfait pour lorsque vous avez besoin de transparence et de qualité sans perte.",
      benefits: [
        "Conversion sans perte",
        "Ajouter le support de la transparence",
        "Meilleure qualité pour les graphiques",
        "Parfait pour le web et l'impression",
        "Maintenir les détails de l'image"
      ],
      faq: [
        {
          question: "Pourquoi convertir JPG en PNG ?",
          answer: "La conversion de JPG en PNG est utile lorsque vous avez besoin de transparence ou que vous souhaitez éviter toute perte de qualité supplémentaire lors de l'édition d'images."
        },
        {
          question: "La qualité de l'image va-t-elle s'améliorer ?",
          answer: "Bien que PNG n'améliore pas la qualité originale de JPG, il empêchera toute perte de qualité supplémentaire lors des modifications ultérieures."
        },
        {
          question: "Quelle est la taille maximale du fichier ?",
          answer: "Vous pouvez convertir des fichiers JPG jusqu'à 50 Mo. Pour les fichiers plus volumineux, envisagez d'utiliser d'abord notre outil de compression."
        },
        {
          question: "Puis-je convertir plusieurs images ?",
          answer: "Oui ! Notre convertisseur prend en charge la conversion par lots de plusieurs images JPG au format PNG."
        },
        {
          question: "Mes données sont-elles sécurisées ?",
          answer: "Oui, toutes les conversions se font dans votre navigateur. Nous ne stockons ni ne transmettons vos images à aucun serveur."
        }
      ]
    },
    "de": {
      title: "JPG in PNG umwandeln",
      description: "Wandeln Sie Ihre JPG-Bilder in hochwertiges PNG-Format um. Perfekt, wenn Sie Transparenz und verlustfreie Qualität benötigen.",
      benefits: [
        "Verlustfreie Umwandlung",
        "Fügen Sie Unterstützung für Transparenz hinzu",
        "Bessere Qualität für Grafiken",
        "Perfekt für Web und Druck",
        "Behalten Sie die Bilddetails"
      ],
      faq: [
        {
          question: "Warum JPG in PNG umwandeln?",
          answer: "Die Umwandlung von JPG in PNG ist nützlich, wenn Sie Transparenz benötigen oder weitere Qualitätsverluste bei der Bildbearbeitung vermeiden möchten."
        },
        {
          question: "Wird die Bildqualität verbessert?",
          answer: "Obwohl PNG die ursprüngliche JPG-Qualität nicht verbessert, wird es weitere Qualitätsverluste bei nachfolgenden Bearbeitungen verhindern."
        },
        {
          question: "Was ist die maximale Dateigröße?",
          answer: "Sie können JPG-Dateien bis zu 50MB umwandeln. Für größere Dateien sollten Sie zuerst unser Kompressionstool verwenden."
        },
        {
          question: "Kann ich mehrere Bilder stapelweise umwandeln?",
          answer: "Ja! Unser Konverter unterstützt die Stapelumwandlung mehrerer JPG-Bilder in PNG-Format."
        },
        {
          question: "Sind meine Daten sicher?",
          answer: "Ja, alle Umwandlungen erfolgen in Ihrem Browser. Wir speichern oder übertragen Ihre Bilder nicht an Server."
        }
      ]
    },
    "it": {
      title: "Converti JPG in PNG",
      description: "Trasforma le tue immagini JPG in formato PNG di alta qualità. Perfetto quando hai bisogno di trasparenza e qualità senza perdite.",
      benefits: [
        "Conversione senza perdite",
        "Aggiungi supporto per la trasparenza",
        "Migliore qualità per la grafica",
        "Perfetto per il web e la stampa",
        "Mantieni i dettagli dell'immagine"
      ],
      faq: [
        {
          question: "Perché convertire JPG in PNG?",
          answer: "Convertire JPG in PNG è utile quando hai bisogno di trasparenza o vuoi evitare ulteriori perdite di qualità nell'editing delle immagini."
        },
        {
          question: "La qualità dell'immagine migliorerà?",
          answer: "Sebbene PNG non migliori la qualità originale di JPG, eviterà ulteriori perdite di qualità nelle modifiche successive."
        },
        {
          question: "Qual è la dimensione massima del file?",
          answer: "Puoi convertire file JPG fino a 50MB. Per file più grandi, considera di utilizzare prima il nostro strumento di compressione."
        },
        {
          question: "Posso convertire più immagini?",
          answer: "Sì! Il nostro convertitore supporta la conversione batch di più immagini JPG in formato PNG."
        },
        {
          question: "I miei dati sono al sicuro?",
          answer: "Sì, tutte le conversioni avvengono nel tuo browser. Non memorizziamo né trasmettiamo le tue immagini a nessun server."
        }
      ]
    },
    "ja": {
      title: "JPGをPNGに変換",
      description: "JPG画像を高品質なPNG形式に変換します。透明性とロスレス品質が必要な場合に最適です。",
      benefits: [
        "ロスレス変換",
        "透明性のサポートを追加",
        "グラフィックの品質向上",
        "ウェブと印刷に最適",
        "画像の詳細を保持"
      ],
      faq: [
        {
          question: "なぜJPGをPNGに変換するのですか？",
          answer: "JPGをPNGに変換することは、透明性が必要な場合や、画像編集でさらなる品質の損失を避けたい場合に便利です。"
        },
        {
          question: "画像の品質は向上しますか？",
          answer: "PNGは元のJPGの品質を改善することはありませんが、後の編集でのさらなる品質の損失を防ぎます。"
        },
        {
          question: "最大ファイルサイズは？",
          answer: "50MBまでのJPGファイルを変換できます。より大きなファイルの場合は、最初に圧縮ツールを使用することを検討してください。"
        },
        {
          question: "複数の画像を一度に変換できますか？",
          answer: "はい！私たちのコンバーターは、複数のJPG画像をPNG形式にバッチ変換することをサポートしています。"
        },
        {
          question: "私のデータは安全ですか？",
          answer: "はい、すべての変換はブラウザ内で行われます。私たちはあなたの画像をサーバーに保存したり送信したりしません。"
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
    },
    "es": {
      title: "Convertir GIF a PNG",
      description: "Convierte tus imágenes GIF a formato PNG. Ideal para extraer fotogramas fijos de GIFs animados con alta calidad.",
      benefits: [
        "Extraer fotogramas de alta calidad",
        "Preservar los detalles de la imagen",
        "Soporte para transparencia",
        "Mejor para editar",
        "Tamaño de archivo más pequeño para fotogramas individuales"
      ],
      faq: [
        {
          question: "¿Puedo convertir GIFs animados?",
          answer: "Sí, pero el formato PNG solo guardará el primer fotograma del GIF animado. Para animaciones, considera mantener el formato GIF original."
        },
        {
          question: "¿Perderé calidad?",
          answer: "No, PNG es un formato sin pérdidas y preservará la calidad del fotograma GIF que estás convirtiendo."
        },
        {
          question: "¿Cuál es el límite de tamaño de archivo?",
          answer: "Puedes convertir archivos GIF de hasta 50MB. Los archivos más grandes pueden necesitar ser comprimidos primero."
        },
        {
          question: "¿Puedo convertir múltiples GIFs a la vez?",
          answer: "¡Sí! Nuestro convertidor soporta la conversión por lotes de múltiples imágenes GIF a formato PNG."
        },
        {
          question: "¿Es segura la conversión?",
          answer: "Absolutamente. Todas las conversiones ocurren localmente en tu navegador, asegurando que tus imágenes permanezcan privadas."
        }
      ]
    },
    "fr": {
      title: "Convertir GIF en PNG",
      description: "Convertissez vos images GIF en format PNG. Idéal pour extraire des images fixes à partir de GIF animés avec une haute qualité.",
      benefits: [
        "Extraire des images de haute qualité",
        "Préserver les détails de l'image",
        "Support pour la transparence",
        "Mieux pour l'édition",
        "Taille de fichier plus petite pour les images uniques"
      ],
      faq: [
        {
          question: "Puis-je convertir des GIFs animés ?",
          answer: "Oui, mais le format PNG ne sauvegardera que le premier cadre du GIF animé. Pour les animations, envisagez de conserver le format GIF original."
        },
        {
          question: "Vais-je perdre en qualité ?",
          answer: "Non, PNG est un format sans perte et préservera la qualité du cadre GIF que vous convertissez."
        },
        {
          question: "Quelle est la limite de taille de fichier ?",
          answer: "Vous pouvez convertir des fichiers GIF jusqu'à 50 Mo. Les fichiers plus volumineux peuvent avoir besoin d'être compressés d'abord."
        },
        {
          question: "Puis-je convertir plusieurs GIFs à la fois ?",
          answer: "Oui ! Notre convertisseur prend en charge la conversion par lots de plusieurs images GIF en format PNG."
        },
        {
          question: "La conversion est-elle sécurisée ?",
          answer: "Absolument. Toutes les conversions se font localement dans votre navigateur, garantissant que vos images restent privées."
        }
      ]
    },
    "de": {
      title: "GIF in PNG umwandeln",
      description: "Wandeln Sie Ihre GIF-Bilder in PNG-Format um. Ideal zum Extrahieren von Standbildern aus animierten GIFs in hoher Qualität.",
      benefits: [
        "Hochwertige Bilder extrahieren",
        "Bilddetails bewahren",
        "Unterstützung für Transparenz",
        "Besser für die Bearbeitung",
        "Kleinere Dateigröße für Einzelbilder"
      ],
      faq: [
        {
          question: "Kann ich animierte GIFs konvertieren?",
          answer: "Ja, aber das PNG-Format speichert nur den ersten Frame des animierten GIFs. Für Animationen sollten Sie das ursprüngliche GIF-Format beibehalten."
        },
        {
          question: "Werde ich Qualität verlieren?",
          answer: "Nein, PNG ist ein verlustfreies Format und bewahrt die Qualität des GIF-Frames, den Sie konvertieren."
        },
        {
          question: "Was ist die Dateigrößenbeschränkung?",
          answer: "Sie können GIF-Dateien bis zu 50MB konvertieren. Größere Dateien müssen möglicherweise zuerst komprimiert werden."
        },
        {
          question: "Kann ich mehrere GIFs auf einmal konvertieren?",
          answer: "Ja! Unser Konverter unterstützt die Batch-Konvertierung mehrerer GIF-Bilder in PNG-Format."
        },
        {
          question: "Ist die Konvertierung sicher?",
          answer: "Absolut. Alle Konvertierungen erfolgen lokal in Ihrem Browser, sodass Ihre Bilder privat bleiben."
        }
      ]
    },
    "it": {
      title: "Converti GIF in PNG",
      description: "Converti le tue immagini GIF in formato PNG. Ideale per estrarre fotogrammi fissi da GIF animate con alta qualità.",
      benefits: [
        "Estrai fotogrammi di alta qualità",
        "Preserva i dettagli dell'immagine",
        "Supporto per la trasparenza",
        "Migliore per l'editing",
        "Dimensione del file più piccola per fotogrammi singoli"
      ],
      faq: [
        {
          question: "Posso convertire GIF animate?",
          answer: "Sì, ma il formato PNG salverà solo il primo fotogramma della GIF animata. Per le animazioni, considera di mantenere il formato GIF originale."
        },
        {
          question: "Perderò qualità?",
          answer: "No, PNG è un formato senza perdita e preserva la qualità del fotogramma GIF che stai convertendo."
        },
        {
          question: "Qual è il limite di dimensione del file?",
          answer: "Puoi convertire file GIF fino a 50MB. I file più grandi potrebbero dover essere compressi prima."
        },
        {
          question: "Posso convertire più GIF contemporaneamente?",
          answer: "Sì! Il nostro convertitore supporta la conversione batch di più immagini GIF in formato PNG."
        },
        {
          question: "La conversione è sicura?",
          answer: "Assolutamente. Tutte le conversioni avvengono localmente nel tuo browser, garantendo che le tue immagini rimangano private."
        }
      ]
    },
    "ja": {
      title: "GIFをPNGに変換",
      description: "GIF画像をPNG形式に変換します。高品質のアニメーションGIFから静止フレームを抽出するのに最適です。",
      benefits: [
        "高品質のフレームを抽出",
        "画像の詳細を保持",
        "透明性のサポート",
        "編集に最適",
        "単一フレームのファイルサイズが小さい"
      ],
      faq: [
        {
          question: "アニメーションGIFを変換できますか？",
          answer: "はい、ただしPNG形式はアニメーションGIFの最初のフレームのみを保存します。アニメーションの場合は、元のGIF形式を保持することを検討してください。"
        },
        {
          question: "品質は失われますか？",
          answer: "いいえ、PNGはロスレス形式であり、変換しているGIFフレームの品質を保持します。"
        },
        {
          question: "ファイルサイズの制限は？",
          answer: "50MBまでのGIFファイルを変換できます。より大きなファイルは、最初に圧縮する必要があるかもしれません。"
        },
        {
          question: "複数のGIFを一度に変換できますか？",
          answer: "はい！私たちのコンバーターは、複数のGIF画像をPNG形式にバッチ変換することをサポートしています。"
        },
        {
          question: "変換は安全ですか？",
          answer: "もちろんです。すべての変換はブラウザ内で行われ、お客様の画像を当社のサーバーに保存することはありません。"
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
    },
    "es": {
      title: "Convertir PNG a JPG",
      description: "Convierte tus imágenes PNG a formato JPG. Perfecto para reducir el tamaño del archivo mientras mantienes una buena calidad visual.",
      benefits: [
        "Tamaños de archivo más pequeños",
        "Mayor compatibilidad",
        "Bueno para fotografías",
        "Tiempos de carga más rápidos",
        "Almacenamiento eficiente"
      ],
      faq: [
        {
          question: "¿Perderé transparencia?",
          answer: "Sí, JPG no admite transparencia. Las áreas transparentes se convertirán en un fondo blanco por defecto."
        },
        {
          question: "¿Cómo se ve afectada la calidad?",
          answer: "JPG utiliza compresión con pérdida, pero nuestro convertidor optimiza el equilibrio entre calidad y tamaño de archivo."
        },
        {
          question: "¿Cuál es el límite de tamaño?",
          answer: "Puedes convertir archivos PNG de hasta 50MB. Los archivos más grandes pueden necesitar ser comprimidos primero."
        },
        {
          question: "¿Puedo convertir varios archivos?",
          answer: "¡Sí! Nuestro convertidor admite la conversión por lotes de múltiples imágenes PNG a formato JPG."
        },
        {
          question: "¿Mis imágenes son seguras?",
          answer: "Sí, todas las conversiones ocurren en tu navegador. No almacenamos ni transmitimos tus imágenes."
        }
      ]
    },
    "fr": {
      title: "Convertir PNG en JPG",
      description: "Convertissez vos images PNG en format JPG. Parfait pour réduire la taille du fichier tout en maintenant une bonne qualité visuelle.",
      benefits: [
        "Taille de fichier plus petite",
        "Compatibilité accrue",
        "Bon pour les photographies",
        "Temps de chargement plus rapides",
        "Stockage efficace"
      ],
      faq: [
        {
          question: "Vais-je perdre de la transparence ?",
          answer: "Oui, JPG ne prend pas en charge la transparence. Les zones transparentes seront converties en arrière-plan blanc par défaut."
        },
        {
          question: "Comment la qualité est-elle affectée ?",
          answer: "JPG utilise une compression avec perte, mais notre convertisseur optimise l'équilibre entre qualité et taille de fichier."
        },
        {
          question: "Quelle est la limite de taille ?",
          answer: "Vous pouvez convertir des fichiers PNG jusqu'à 50 Mo. Les fichiers plus volumineux peuvent avoir besoin d'être compressés d'abord."
        },
        {
          question: "Puis-je convertir plusieurs fichiers ?",
          answer: "Oui ! Notre convertisseur prend en charge la conversion par lots de plusieurs images PNG en format JPG."
        },
        {
          question: "Mes images sont-elles sécurisées ?",
          answer: "Oui, toutes les conversions se font dans votre navigateur. Nous ne stockons ni ne transmettons vos images."
        }
      ]
    },
    "de": {
      title: "PNG in JPG umwandeln",
      description: "Wandeln Sie Ihre PNG-Bilder in JPG-Format um. Perfekt, um die Dateigröße zu reduzieren und gleichzeitig eine gute visuelle Qualität zu erhalten.",
      benefits: [
        "Kleinere Dateigrößen",
        "Breitere Kompatibilität",
        "Gut für Fotografien",
        "Schnellere Ladezeiten",
        "Effiziente Speicherung"
      ],
      faq: [
        {
          question: "Werde ich Transparenz verlieren?",
          answer: "Ja, JPG unterstützt keine Transparenz. Transparente Bereiche werden standardmäßig in einen weißen Hintergrund umgewandelt."
        },
        {
          question: "Wie wird die Qualität beeinflusst?",
          answer: "JPG verwendet verlustbehaftete Kompression, aber unser Konverter optimiert das Gleichgewicht zwischen Qualität und Dateigröße."
        },
        {
          question: "Was ist die Größenbeschränkung?",
          answer: "Sie können PNG-Dateien bis zu 50MB konvertieren. Größere Dateien müssen möglicherweise zuerst komprimiert werden."
        },
        {
          question: "Kann ich mehrere Dateien konvertieren?",
          answer: "Ja! Unser Konverter unterstützt die Batch-Konvertierung mehrerer PNG-Bilder in JPG-Format."
        },
        {
          question: "Sind meine Bilder sicher?",
          answer: "Ja, alle Konversionen erfolgen in Ihrem Browser. Wir speichern oder übertragen Ihre Bilder nicht."
        }
      ]
    },
    "it": {
      title: "Converti PNG in JPG",
      description: "Converti le tue immagini PNG in formato JPG. Perfetto per ridurre le dimensioni del file mantenendo una buona qualità visiva.",
      benefits: [
        "Dimensioni dei file più piccole",
        "Maggiore compatibilità",
        "Buono per le fotografie",
        "Tempi di caricamento più rapidi",
        "Archiviazione efficiente"
      ],
      faq: [
        {
          question: "Perderò trasparenza?",
          answer: "Sì, JPG non supporta la trasparenza. Le aree trasparenti verranno convertite in uno sfondo bianco per impostazione predefinita."
        },
        {
          question: "Come viene influenzata la qualità?",
          answer: "JPG utilizza la compressione lossy, ma il nostro convertitore ottimizza il bilanciamento tra qualità e dimensione del file."
        },
        {
          question: "Qual è il limite di dimensione?",
          answer: "Puoi convertire file PNG fino a 50MB. I file più grandi potrebbero dover essere compressi prima."
        },
        {
          question: "Posso convertire più file?",
          answer: "Sì! Il nostro convertitore supporta la conversione batch di più immagini PNG in formato JPG."
        },
        {
          question: "Le mie immagini sono sicure?",
          answer: "Sì, tutte le conversioni avvengono nel tuo browser. Non memorizziamo né trasmettiamo le tue immagini."
        }
      ]
    },
    "ja": {
      title: "PNGをJPGに変換",
      description: "PNG画像をJPG形式に変換します。ファイルサイズを削減しながら、良好な視覚品質を維持するのに最適です。",
      benefits: [
        "ファイルサイズが小さくなる",
        "互換性が広がる",
        "写真に最適",
        "読み込み時間が短縮",
        "効率的なストレージ"
      ],
      faq: [
        {
          question: "透明性は失われますか？",
          answer: "はい、JPGは透明性をサポートしていません。透明な部分はデフォルトで白い背景に変換されます。"
        },
        {
          question: "品質はどのように影響されますか？",
          answer: "JPGはロス圧縮を使用しますが、私たちのコンバーターは品質とファイルサイズのバランスを最適化します。"
        },
        {
          question: "サイズ制限は何ですか？",
          answer: "PNGファイルを最大50MBまで変換できます。より大きなファイルは、最初に圧縮する必要があるかもしれません。"
        },
        {
          question: "複数のファイルを変換できますか？",
          answer: "はい！私たちのコンバーターは、複数のPNG画像をJPG形式にバッチ変換することをサポートしています。"
        },
        {
          question: "私の画像は安全ですか？",
          answer: "はい、すべての変換はブラウザ内で行われます。私たちはあなたの画像をサーバーに保存したり送信したりしません。"
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
    },
    "es": {
      title: "Convertir PNG a WebP",
      description: "Transforma tus imágenes PNG en formato WebP para una compresión y calidad superiores. Ideal para la optimización web.",
      benefits: [
        "Tamaños de archivo más pequeños",
        "Mejor compresión",
        "Mantiene la calidad",
        "Soporte para transparencia",
        "Perfecto para uso web"
      ],
      faq: [
        {
          question: "¿Por qué elegir WebP?",
          answer: "WebP ofrece mejor compresión que PNG mientras mantiene alta calidad, lo que lo hace perfecto para imágenes web."
        },
        {
          question: "¿Perderé calidad?",
          answer: "WebP proporciona excelente calidad mientras reduce significativamente el tamaño del archivo en comparación con PNG."
        },
        {
          question: "¿Cuál es el límite de tamaño del archivo?",
          answer: "Puedes convertir archivos PNG de hasta 50MB. Los archivos más grandes pueden necesitar ser comprimidos primero."
        },
        {
          question: "¿Puedo convertir varias imágenes?",
          answer: "¡Sí! Nuestro convertidor admite la conversión por lotes de múltiples imágenes PNG a formato WebP."
        },
        {
          question: "¿Es segura la conversión?",
          answer: "Sí, todas las conversiones ocurren en tu navegador. No almacenamos ni transmitimos tus imágenes."
        }
      ]
    },
    "fr": {
      title: "Convertir PNG en WebP",
      description: "Transformez vos images PNG en format WebP pour une compression et une qualité supérieures. Idéal pour l'optimisation web.",
      benefits: [
        "Taille de fichier plus petite",
        "Meilleure compression",
        "Maintient la qualité",
        "Support pour la transparence",
        "Parfait pour une utilisation sur le web"
      ],
      faq: [
        {
          question: "Pourquoi choisir WebP ?",
          answer: "WebP offre une meilleure compression que PNG tout en maintenant une haute qualité, ce qui le rend parfait pour les images web."
        },
        {
          question: "Vais-je perdre en qualité ?",
          answer: "WebP fournit une excellente qualité tout en réduisant considérablement la taille du fichier par rapport à PNG."
        },
        {
          question: "Quelle est la limite de taille de fichier ?",
          answer: "Vous pouvez convertir des fichiers PNG jusqu'à 50 Mo. Les fichiers plus volumineux peuvent avoir besoin d'être compressés d'abord."
        },
        {
          question: "Puis-je convertir plusieurs images ?",
          answer: "Oui ! Notre convertisseur prend en charge la conversion par lots de plusieurs images PNG en format WebP."
        },
        {
          question: "La conversion est-elle sécurisée ?",
          answer: "Oui, toutes les conversions se font dans votre navigateur. Nous ne stockons ni ne transmettons vos images."
        }
      ]
    },
    "de": {
      title: "PNG in WebP umwandeln",
      description: "Wandeln Sie Ihre PNG-Bilder in WebP-Format um für überlegene Kompression und Qualität. Ideal für die Web-Optimierung.",
      benefits: [
        "Kleinere Dateigrößen",
        "Bessere Kompression",
        "Hält die Qualität",
        "Unterstützung für Transparenz",
        "Perfekt für die Webnutzung"
      ],
      faq: [
        {
          question: "Warum WebP wählen?",
          answer: "WebP bietet eine bessere Kompression als PNG und erhält gleichzeitig eine hohe Qualität, was es perfekt für Webbilder macht."
        },
        {
          question: "Werde ich Qualität verlieren?",
          answer: "WebP bietet hervorragende Qualität und reduziert gleichzeitig die Dateigröße im Vergleich zu PNG erheblich."
        },
        {
          question: "Was ist die Dateigrößenbeschränkung?",
          answer: "Sie können PNG-Dateien bis zu 50MB konvertieren. Größere Dateien müssen möglicherweise zuerst komprimiert werden."
        },
        {
          question: "Kann ich mehrere Bilder batchweise konvertieren?",
          answer: "Ja! Unser Konverter unterstützt die Batch-Konvertierung mehrerer PNG-Bilder in WebP-Format."
        },
        {
          question: "Ist die Konvertierung sicher?",
          answer: "Ja, alle Konvertierungen erfolgen in Ihrem Browser. Wir speichern oder übertragen Ihre Bilder nicht."
        }
      ]
    },
    "it": {
      title: "Converti PNG in WebP",
      description: "Trasforma le tue immagini PNG in formato WebP per una compressione e qualità superiori. Ideale per l'ottimizzazione web.",
      benefits: [
        "Dimensioni dei file più piccole",
        "Migliore compressione",
        "Mantiene la qualità",
        "Supporto per la trasparenza",
        "Perfetto per l'uso web"
      ],
      faq: [
        {
          question: "Perché scegliere WebP?",
          answer: "WebP offre una compressione migliore rispetto a PNG mantenendo alta qualità, rendendolo perfetto per le immagini web."
        },
        {
          question: "Perderò qualità?",
          answer: "WebP fornisce un'eccellente qualità riducendo significativamente le dimensioni del file rispetto a PNG."
        },
        {
          question: "Qual è il limite di dimensione del file?",
          answer: "Puoi convertire file PNG fino a 50MB. I file più grandi potrebbero dover essere compressi prima."
        },
        {
          question: "Posso convertire più immagini?",
          answer: "Sì! Il nostro convertitore supporta la conversione batch di più immagini PNG in formato WebP."
        },
        {
          question: "La conversione è sicura?",
          answer: "Sì, tutte le conversioni avvengono nel tuo browser. Non memorizziamo né trasmettiamo le tue immagini."
        }
      ]
    },
    "ja": {
      title: "PNGをWebPに変換",
      description: "PNG画像をWebP形式に変換し、優れた圧縮と品質を実現します。ウェブ最適化に最適です。",
      benefits: [
        "ファイルサイズが小さくなる",
        "より良い圧縮",
        "品質を維持",
        "透明性のサポート",
        "ウェブ使用に最適"
      ],
      faq: [
        {
          question: "なぜWebPを選ぶのですか？",
          answer: "WebPはPNGよりも優れた圧縮を提供し、高品質を維持するため、ウェブ画像に最適です。"
        },
        {
          question: "品質は失われますか？",
          answer: "WebPはPNGに比べてファイルサイズを大幅に削減しながら、優れた品質を提供します。"
        },
        {
          question: "ファイルサイズの制限は？",
          answer: "PNGファイルを最大50MBまで変換できます。より大きなファイルは、最初に圧縮する必要があるかもしれません。"
        },
        {
          question: "複数の画像を一度に変換できますか？",
          answer: "はい！私たちのコンバーターは、複数のPNG画像をWebP形式にバッチ変換することをサポートしています。"
        },
        {
          question: "変換は安全ですか？",
          answer: "はい、すべての変換はブラウザ内で行われます。私たちはあなたの画像をサーバーに保存したり送信したりしません。"
        }
      ]
    }
  }
};
