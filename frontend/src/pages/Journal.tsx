import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen } from "lucide-react";

export default function Journal() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-light">
              {isArabic ? "مجلة SNP" : "SNP Journal"}
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {isArabic
                ? "المجلة العلمية لأبحاث تعدد أشكال النوكليوتيدات المفردة"
                : "The scientific journal for Single Nucleotide Polymorphism research"}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center max-w-lg mx-auto">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-light mb-4">
                {isArabic ? "قريباً" : "Coming Soon"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isArabic
                  ? "نعمل على بناء مجلة علمية محكمة تركز على أبحاث SNP. ترقبوا التحديثات."
                  : "We're building a peer-reviewed scientific journal focused on SNP research. Stay tuned for updates."}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
