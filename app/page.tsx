import Link from "next/link"
import { ChevronRight, CheckCircle, FileText, Phone, CreditCard, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl font-bold">Cenaze Planlayıcı</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Ana Sayfa
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Yapılacaklar
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Hizmetler
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Finansman
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Yardım
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            Giriş Yap
          </Button>
          <Button className="md:hidden" variant="outline" size="icon">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Menü</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Zor Zamanlarda Yanınızdayız
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Cenaze sürecinde ailelere destek olmak için tasarlanmış kapsamlı bir planlama ve organizasyon
                  uygulaması.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>
                    Hemen Başla
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Daha Fazla Bilgi</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm p-4 bg-background rounded-lg shadow-lg">
                  <div className="space-y-2 text-center mb-4">
                    <h3 className="text-xl font-bold">Acil Yardım</h3>
                    <p className="text-sm text-muted-foreground">
                      Size hemen yardımcı olabilmemiz için aşağıdaki seçeneklerden birini seçin
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Button variant="secondary" className="justify-start">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Yapılacaklar Listesi
                    </Button>
                    <Button variant="secondary" className="justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Resmi İşlemler
                    </Button>
                    <Button variant="secondary" className="justify-start">
                      <Phone className="mr-2 h-4 w-4" />
                      Cenaze Hizmetleri
                    </Button>
                    <Button variant="secondary" className="justify-start">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Acil Finansman
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nasıl Yardımcı Oluyoruz?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cenaze sürecinde ailelerin karşılaştığı zorlukları hafifletmek için kapsamlı çözümler sunuyoruz.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Adım Adım Rehberlik</CardTitle>
                  <CardDescription>
                    Cenaze sürecinde yapılması gereken tüm işlemleri adım adım anlatan kapsamlı rehber.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Ölüm bildiriminin yapılacağı kurumlar</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Cenaze işlemleri için gerekli belgeler</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Dini vecibelerin yerine getirilmesi</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Defin işlemleri ve mezarlık seçimi</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Rehbere Göz At
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cenaze Hizmetleri</CardTitle>
                  <CardDescription>
                    Cenaze töreni organizasyonu için ihtiyaç duyacağınız tüm hizmetlere erişim.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Cenaze nakil hizmetleri</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Cenaze yıkama ve hazırlık</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Taziye organizasyonu</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Mezar taşı ve bakım hizmetleri</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Hizmetleri İncele
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Acil Finansman</CardTitle>
                  <CardDescription>
                    Cenaze masrafları için ihtiyaç duyabileceğiniz acil finansal destek seçenekleri.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Hızlı mikro kredi imkanları</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Belediye destekleri ve yardımlar</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Sigorta ve ölüm yardımı işlemleri</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Taksitli ödeme seçenekleri</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Finansman Seçenekleri
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Acil Finansal Destek</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Beklenmedik cenaze masrafları için hızlı ve kolay finansman çözümleri sunuyoruz. Mikro kredi
                  seçeneklerimiz, bu zor zamanlarda ailelerin finansal yükünü hafifletmeyi amaçlamaktadır.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Hızlı Onay</h3>
                      <p className="text-sm text-muted-foreground">24 saat içinde finansman onayı</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Esnek Geri Ödeme</h3>
                      <p className="text-sm text-muted-foreground">Durumunuza uygun geri ödeme planları</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Düşük Faiz Oranları</h3>
                      <p className="text-sm text-muted-foreground">Cenaze masrafları için özel düşük faizli krediler</p>
                    </div>
                  </li>
                </ul>
                <Button>
                  Finansman Seçeneklerini Gör
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Acil Mikro Kredi</CardTitle>
                    <CardDescription>5.000 TL'ye kadar hızlı finansman</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Cenaze masrafları için anında onaylanan mikro kredi. Minimum belge ile hızlı başvuru.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span>Faiz Oranı:</span>
                        <span className="font-medium">%0.89</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Vade:</span>
                        <span className="font-medium">12 aya kadar</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Hemen Başvur</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Belediye Destekleri</CardTitle>
                    <CardDescription>Ücretsiz cenaze hizmetleri</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Belediyeler tarafından sağlanan ücretsiz cenaze hizmetleri ve destekler hakkında bilgi alın.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Detaylı Bilgi
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Yapılacaklar Listesi</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cenaze sürecinde yapılması gereken işlemleri adım adım takip edin.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-8">
              <Card>
                <CardHeader>
                  <CardTitle>İlk 24 Saat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Ölüm belgesini almak için doktor çağırın veya hastaneye başvurun</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Nüfus müdürlüğüne ölüm bildiriminde bulunun</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Cenaze yıkama ve hazırlık işlemleri için düzenlemeler yapın</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Defin izni alın</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cenaze Töreni Öncesi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Cenaze namazı için cami ile iletişime geçin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Mezarlık yerini belirleyin ve gerekli ödemeleri yapın</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Cenaze ilanı verin ve yakınları bilgilendirin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Taziye organizasyonu için hazırlık yapın</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cenaze Sonrası İşlemler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Veraset ilamı için mahkemeye başvurun</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Banka hesapları, emeklilik ve sigorta işlemlerini başlatın</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Ölüm yardımı için SGK'ya başvurun</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <p>Miras ve tapu işlemlerini başlatın</p>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center">
                <Button>
                  Detaylı Listeyi Görüntüle
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Yanınızdayız</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bu zor zamanınızda size destek olmak için buradayız. Hemen başlayın ve cenaze sürecini daha kolay
                  yönetin.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  Uygulamayı Başlat
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Bize Ulaşın
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-lg font-bold">Cenaze Planlayıcı</span>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-xs">
              Cenaze sürecinde ailelere destek olmak için tasarlanmış kapsamlı bir planlama ve organizasyon uygulaması.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Hizmetler</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Yapılacaklar Listesi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cenaze Hizmetleri
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Finansman
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Rehberlik
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Destek</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sıkça Sorulan Sorular
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    İletişim
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Yardım Hattı
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Yasal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Kullanım Şartları
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">İletişim</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    info@cenazeplanlayici.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    +90 212 123 45 67
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-4 border-t py-6 md:flex-row md:items-center md:gap-0 md:py-8">
          <p className="text-xs text-muted-foreground md:flex-1">
            &copy; {new Date().getFullYear()} Cenaze Planlayıcı. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  )
}

