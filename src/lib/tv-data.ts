export interface TVEpisode {
  id: string;
  title: string;
  director: string;
  duration: string;
  category: string;
  description: string;
  posterImg: string;
  videoUrl: string;
}

export const TV_CATALOG: TVEpisode[] = [
  // FEATURED PREMIERES
  {
    id: 'digital-shadows',
    title: 'Digital Shadows',
    director: 'Mansi Malhotra',
    duration: '14:20',
    category: 'Featured Premieres',
    description: 'An exclusive look into the algorithmic precision behind Atelier Eclipse\'s latest collection. Featuring never-before-seen footage of the neural network generating their signature fabrics.',
    posterImg: '/media/media__1780859403752.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4'
  },
  {
    id: 'meet-the-model-apsara',
    title: 'Meet the model: Apsara',
    director: 'DP WestVogue',
    duration: '12:05',
    category: 'Featured Premieres',
    description: 'Miss India 2021 First Runner-up Apsara sits down with WestVogue to discuss her journey from the runway to the digital frontier.',
    posterImg: '/media/media__1780859414021.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4'
  },
  {
    id: 'nayana-josan-film',
    title: 'Nayana Josan',
    director: 'DP WestVogue',
    duration: '06:30',
    category: 'Featured Premieres',
    description: 'A cinematic fashion film capturing the elegance and raw power of modern power dressing in the heart of Mumbai.',
    posterImg: '/media/media__1780859414116.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4'
  },
  {
    id: 'the-paris-effect',
    title: 'The Paris Effect',
    director: 'Jules Laurent',
    duration: '18:45',
    category: 'Featured Premieres',
    description: 'How the city of light continues to dictate the global silhouette, even as the medium shifts from physical silk to digital pixels.',
    posterImg: '/media/media__1780859403775.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4'
  },

  // DESIGNER DOCUMENTARIES
  {
    id: 'mind-of-kameda',
    title: 'Mind of Kameda',
    director: 'Sarah Jenkins',
    duration: '45:00',
    category: 'Designer Documentaries',
    description: 'A deep dive into the reclusive Tokyo designer who pioneered smart-fabrics that change color based on the wearer\'s biometric data.',
    posterImg: '/media/media__1780859404113.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4'
  },
  {
    id: 'vance-origins',
    title: 'Vance: Origins',
    director: 'Michael Vance',
    duration: '38:15',
    category: 'Designer Documentaries',
    description: 'The controversial rise of London\'s most disruptive streetwear label and their sudden pivot to high-end digital couture.',
    posterImg: '/media/media__1780859404127.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4'
  },
  {
    id: 'the-sterling-process',
    title: 'The Sterling Process',
    director: 'David Sterling',
    duration: '52:10',
    category: 'Designer Documentaries',
    description: 'Follow the 6-month process of creating a single bespoke garment, from initial AI generation to physical hand-stitching.',
    posterImg: '/media/media__1780859413985.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4'
  },
  {
    id: 'atelier-2030',
    title: 'Atelier 2030',
    director: 'Elena Rossi',
    duration: '41:20',
    category: 'Designer Documentaries',
    description: 'Five visionary designers discuss the death of fast fashion and the rise of sustainable, zero-waste digital production cycles.',
    posterImg: '/media/media__1780859414045.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4'
  },

  // RUNWAY ARCHIVES
  {
    id: 'maison-vertex-fw26',
    title: 'Maison Vertex FW26',
    director: 'Vertex Studios',
    duration: '22:00',
    category: 'Runway Archives',
    description: 'The complete unbroken runway presentation of Maison Vertex\'s Fall/Winter 2026 collection in Milan.',
    posterImg: '/media/media__1780859414099.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4'
  },
  {
    id: 'aura-core-ss27',
    title: 'Aura Core SS27',
    director: 'Aura Team',
    duration: '18:30',
    category: 'Runway Archives',
    description: 'Aura Core\'s controversial Spring/Summer 2027 show, where models walked alongside their exact digital holograms.',
    posterImg: '/media/media__1780859424575.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4'
  },
  {
    id: 'lumiere-paris',
    title: 'Lumiere Paris',
    director: 'Lumiere House',
    duration: '25:45',
    category: 'Runway Archives',
    description: 'The spectacular midnight presentation outside the Louvre, marking Lumiere\'s return to traditional haute couture.',
    posterImg: '/media/media__1780859424596.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4'
  },
  {
    id: 'cyber-couture-tokyo',
    title: 'Cyber Couture Tokyo',
    director: 'Neo Tokyo Collective',
    duration: '31:10',
    category: 'Runway Archives',
    description: 'The underground runway show that redefined tech-wear for the next decade.',
    posterImg: '/media/media__1780859424647.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4'
  },

  // WESTVOGUE ORIGINALS
  {
    id: 'meet-the-model-aswathy',
    title: 'Meet the model: Aswathy',
    director: 'DP WestVogue',
    duration: '10:15',
    category: 'Westvogue Originals',
    description: 'Aswathy Mukundan shares her perspective on the evolving landscape of digital modeling and physical presence.',
    posterImg: '/media/media__1780859424676.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4'
  },
  {
    id: 'meet-the-model-abee',
    title: 'Meet the model: Abee',
    director: 'DP WestVogue',
    duration: '11:40',
    category: 'Westvogue Originals',
    description: 'Abee Suhana takes us behind the scenes of her latest Westvogue editorial shoot.',
    posterImg: '/media/media__1780859424684.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4'
  },
  {
    id: 'rajesh-keshav-bts',
    title: 'Rajesh Keshav | BTS',
    director: 'DP WestVogue',
    duration: '08:50',
    category: 'Westvogue Originals',
    description: 'Behind the lens with fashion photographer Rajesh Keshav as he captures the June cover.',
    posterImg: '/media/media__1780859442696.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4'
  },
  {
    id: 'nova-rae-doc',
    title: 'Nova Rae: The Documentary',
    director: 'Westvogue Studios',
    duration: '1:12:00',
    category: 'Westvogue Originals',
    description: 'The feature-length documentary on the creation, rise, and global impact of the world\'s first super-virtual model.',
    posterImg: '/media/media__1780859442744.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4'
  }
];

// Helper functions
export const getEpisodesByCategory = (category: string) => {
  return TV_CATALOG.filter(ep => ep.category === category);
};

export const getEpisodeById = (id: string) => {
  return TV_CATALOG.find(ep => ep.id === id);
};

export const getRelatedEpisodes = (currentId: string, limit: number = 4) => {
  return TV_CATALOG.filter(ep => ep.id !== currentId).slice(0, limit);
};
