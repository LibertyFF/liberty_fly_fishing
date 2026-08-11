import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import LocationCards from '../components/LocationCards';
import PhotoGallery from '../components/PhotoGallery';
import Reviews from '../components/Reviews';
import BookingCTA from '../components/BookingCTA';
import FullWidthPhoto from '../components/FullWidthPhoto';
import { allGallery, coloradoFeature, louisianaFeature } from '../data/galleryImages';

// Hero subtitle: each region gets its own block with an accent overline, matching
// the overline treatment used elsewhere in the hero and on the booking panel.
const regionBlock = {
    display: 'block',
    marginBottom: '0.85rem',
};

const regionLabel = {
    display: 'block',
    fontFamily: 'var(--font-heading)',
    fontSize: '0.68rem',
    fontWeight: 800,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--color-accent)',
    marginBottom: '0.15rem',
};

export default function HomePage() {
    return (
        <>
            <Hero
                headline="World-Class Guided Fly Fishing"
                headlineAccent="Colorado & Louisiana"
                subtitle={
                    <>
                        <span style={regionBlock}>
                            <span style={regionLabel}>Colorado</span>
                            Gold Medal trout rivers of the Vail Valley, Roaring Fork Valley &amp; Western Slope.
                        </span>
                        <span style={regionBlock}>
                            <span style={regionLabel}>Louisiana</span>
                            Expansive coastal salt marshes, bays &amp; flats of the southern coast.
                        </span>
                        <span style={{ display: 'block', opacity: 0.82 }}>
                            Guided by Captain Patrick Gerig.
                        </span>
                    </>
                }
                ctaPrimary={{ label: 'Book Now', href: '#contact' }}
                ctaSecondary={{ label: 'Explore Locations', href: '#locations' }}
                imageSrc="/images/LFF_background.webp?v=1"
                overlayOpacity={0.38}
            />
            <BrandIntro />
            <LocationCards />
            <FullWidthPhoto
                src={coloradoFeature}
                alt="Fly fishing Colorado's Gold Medal trout rivers"
                label="Colorado"
                sublabel="Vail Valley & Roaring Fork Valley"
                link="/colorado"
                linkLabel="Explore Colorado Trips"
            />
            <FullWidthPhoto
                src={louisianaFeature}
                alt="Sight fishing for redfish in the Louisiana marsh"
                label="Louisiana"
                sublabel="Biloxi Marsh · Southeast Louisiana"
                link="/louisiana"
                linkLabel="Explore Louisiana Trips"
            />
            <PhotoGallery
                images={allGallery}
                title="Life on the Water"
                altPrefix="Liberty Fly Fishing"
            />
            <Reviews />
            <BookingCTA />
        </>
    );
}
