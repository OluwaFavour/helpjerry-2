import { useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/8939883/pexels-photo-8939883.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Jerry with his caregiver Steve at home",
    alt: "Jerry and caregiver at home",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/7551471/pexels-photo-7551471.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "A day in therapy",
    alt: "Therapy session",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/8939884/pexels-photo-8939884.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Jerry with his mom Diane",
    alt: "Jerry with his mother",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/7551461/pexels-photo-7551461.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Medical equipment that helps Jerry daily",
    alt: "Medical equipment",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/8939880/pexels-photo-8939880.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Jerry enjoying time with family",
    alt: "Family time",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/7551470/pexels-photo-7551470.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Moments of joy and laughter",
    alt: "Happy moments",
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhoto === null) return;

    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedPhoto
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedPhoto(photos[newIndex].id);
  };

  const selectedPhotoData = photos.find((photo) => photo.id === selectedPhoto);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <Camera className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Glimpse Into Jerry's Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These photos capture moments from Jerry's daily life, showing the
            strength, love, and support that surround him every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => openLightbox(photo.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && selectedPhotoData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigatePhoto("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigatePhoto("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={selectedPhotoData.src}
              alt={selectedPhotoData.alt}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-center text-lg">
                {selectedPhotoData.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
