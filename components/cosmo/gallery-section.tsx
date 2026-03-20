"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

const galleryItems = [
  {
    id: 1,
    title: "Столпы Творения",
    source: "James Webb / Hubble",
    category: "Туманности",
    description: "Культовый снимок области звездообразования в туманности Орла",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-amber-600 via-orange-500 to-red-600",
  },
  {
    id: 2,
    title: "Туманность Киля",
    source: "James Webb",
    category: "Туманности",
    description: "Колоссальные облака газа и пыли, где рождаются новые звёзды",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
  },
  {
    id: 3,
    title: "Галактика Водоворот",
    source: "Hubble",
    category: "Галактики",
    description: "Спиральная галактика M51 во всём великолепии",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Сатурн и кольца",
    source: "Cassini",
    category: "Планеты",
    description: "Детальный снимок величественной планеты и её колец",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
  },
  {
    id: 5,
    title: "Туманность Тарантул",
    source: "James Webb",
    category: "Туманности",
    description: "Крупнейшая область звездообразования в ближайших галактиках",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-teal-500 via-emerald-600 to-green-700",
  },
  {
    id: 6,
    title: "Глубокое поле JWST",
    source: "James Webb",
    category: "Глубокий космос",
    description: "Тысячи галактик на краю видимой Вселенной",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
  },
  {
    id: 7,
    title: "Планета Земля",
    source: "NASA",
    category: "Планеты",
    description: "Потрясающий вид на нашу голубую планету из космоса",
    image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
  },
  {
    id: 8,
    title: "Ядро Галактики",
    source: "Hubble",
    category: "Галактики",
    description: "Сверхмассивная черная дыра в центре Млечного Пути",
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-amber-600 via-orange-500 to-red-600",
  },
  {
    id: 9,
    title: "Пылевые облака",
    source: "James Webb",
    category: "Туманности",
    description: "Рождение тысяч звезд в плотном пылевом облаке",
    image: "https://images.unsplash.com/photo-1614732414444-098e5f111310?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1614732414444-098e5f111310?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    id: 10,
    title: "Туманность Розетка",
    source: "Hubble",
    category: "Туманности",
    description: "Эмиссионная туманность в созвездии Единорога",
    image: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-rose-500 via-red-500 to-orange-500",
  },
  {
    id: 11,
    title: "Луна и горизонт",
    source: "Apollo",
    category: "Планеты",
    description: "Естественный спутник Земли во всей красе",
    image: "https://images.unsplash.com/photo-1532692257216-b10bf4fc8116?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1532692257216-b10bf4fc8116?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-gray-400 via-slate-500 to-zinc-600",
  },
  {
    id: 12,
    title: "Далекие миры",
    source: "James Webb",
    category: "Глубокий космос",
    description: "Скрытые галактики за пылевыми стенами",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1080&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=100&w=3000&auto=format&fit=crop",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
  },
]

const categories = ["Все", "Туманности", "Галактики", "Планеты", "Глубокий космос"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Все")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  const [visibleCount, setVisibleCount] = useState(6)

  const handleDownload = async (item: typeof galleryItems[0]) => {
    toast.success("Загрузка началась", { description: `Файл ${item.title}.jpg готов к скачиванию` });
    
    try {
      const response = await fetch(item.fullImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${item.title.replace(/\s+/g, '_')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed, opening in new tab instead", error);
      window.open(item.fullImage, '_blank');
    }
  };

  const filteredItems = selectedCategory === "Все"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const itemsToShow = filteredItems.slice(0, visibleCount)

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-space" />
      <div className="absolute inset-0 star-field opacity-30" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 glass rounded-full text-sm text-primary mb-4">
            Визуальные чудеса
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Космическая </span>
            <span className="text-primary text-glow">галерея</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Захватывающие снимки с лучших телескопов и космических аппаратов
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(6); // Сбрасываем количество при смене категории
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsToShow.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Real Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-xs text-primary mb-2">{item.source}</span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* View More */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mt-12 animate-in fade-in zoom-in duration-500">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:bg-primary/10 cursor-pointer neon-glow"
              onClick={() => {
                setVisibleCount(filteredItems.length);
                toast.success("Все изображения загружены", { description: `Показано ${filteredItems.length} снимков` });
              }}
            >
              Смотреть все изображения ({filteredItems.length - visibleCount} новых)
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full glass-strong rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Real Image Fullscreen */}
            <img 
              src={selectedImage.fullImage} 
              alt={selectedImage.title} 
              loading="lazy"
              decoding="async"
              className="w-full max-h-[70vh] object-cover" 
            />

            {/* Info */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                  {selectedImage.source}
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedImage.description}
              </p>
              <Button 
                className="neon-glow cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(selectedImage);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Скачать в высоком разрешении
              </Button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              const currentIndex = galleryItems.findIndex(i => i.id === selectedImage.id)
              const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
              setSelectedImage(galleryItems[prevIndex])
            }}
            className="absolute left-4 p-3 rounded-full glass hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              const currentIndex = galleryItems.findIndex(i => i.id === selectedImage.id)
              const nextIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
              setSelectedImage(galleryItems[nextIndex])
            }}
            className="absolute right-4 p-3 rounded-full glass hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
    </section>
  )
}
