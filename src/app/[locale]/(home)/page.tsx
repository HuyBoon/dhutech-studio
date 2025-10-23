import Banner from "@/components/layout/Banner";
import BenefitsSection from "@/components/layout/BenefitsSection";
import BlogSection from "@/components/layout/BlogSection";
import CallToActionSection from "@/components/layout/CallToActionSection";
import CriteriaSection from "@/components/layout/CriteriaSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import IndustrySolutionsSection from "@/components/layout/IndustrySolutionsSection";
import PricingSection from "@/components/layout/PricingSection";
import TechStackSection from "@/components/layout/TechStackSection";
import WebsiteDesignProcess from "@/components/layout/WebsiteDesignProcess";
import WhyChooseUsSection from "@/components/layout/WhyChooseUsSection";

export default function Home() {
    return (
        <section className="w-full">
            <Header />
            <Banner />
            <BenefitsSection />
            <WhyChooseUsSection />
            <IndustrySolutionsSection />
            <WebsiteDesignProcess />
            <CriteriaSection />
            <TechStackSection />
            <BlogSection />
            <div className="relative z-20 mb-[-5%]">
                <CallToActionSection />
            </div>
            <div className="relative z-10 ">
                <Footer />
            </div>
        </section>
    );
}
