import styles from './Gallery.module.scss';
import { GALLERY_IMAGES } from './constants';
import { GalleryItem } from './GalleryItem';

const Gallery = () => (
  <div className={styles.gallerySection}>
    <div className={styles.galleryGrid}>
      {GALLERY_IMAGES.map((src, index) => (
        <GalleryItem key={src} src={src} index={index} />
      ))}
    </div>
  </div>
);

export default Gallery;
