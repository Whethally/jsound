import styles from '../Gallery.module.scss';
import { GALLERY_CONTENT } from '../constants';

type GalleryItemProps = {
  src: string;
  index: number;
};

export const GalleryItem = ({ src, index }: GalleryItemProps) => (
  <div
    className={styles.galleryItem}
    style={{ backgroundImage: `url(${src})` }}
    role='img'
    aria-label={`${GALLERY_CONTENT.imageAltPrefix} ${index + 1} ${GALLERY_CONTENT.imageAltSuffix}`}
  />
);
