import styles from './Gallery.module.scss';

// Галерея 3x3
const galleryImages = [
  '/Photo/Image_1.png',
  '/Photo/Image_2.png',
  '/Photo/Image_3.png',
  '/Photo/Image_4.png',
  '/Photo/Image_5.png',
  '/Photo/Image_6.png',
  '/Photo/Image_7.png',
  '/Photo/Image_8.png',
  '/Photo/Image_9.png'
];

const Gallery = () => (
  <div className={styles.gallerySection}>
    <div className={styles.galleryGrid}>
      {galleryImages.map((src, index) => (
        <div
          key={src}
          className={styles.galleryItem}
          style={{ backgroundImage: `url(${src})` }}
          role='img'
          aria-label={`Фотография ${index + 1} из галереи студии`}
        />
      ))}
    </div>
  </div>
);

export default Gallery;
