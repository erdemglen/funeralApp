import { CheckCircle, ChevronRight, CreditCard, FileText, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinancePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Finansal Destek</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Cenaze masrafları için finansal destek seçenekleri ve yardım programları.
          </p>
        </div>
      </div>

      <Tabs defaultValue="mikro" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mikro">Mikro Kredi</TabsTrigger>
          <TabsTrigger value="belediye">Belediye Destekleri</TabsTrigger>
          <TabsTrigger value="sgk">SGK Yardımları</TabsTrigger>
        </TabsList>

        <TabsContent value="mikro" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Acil Mikro Kredi</CardTitle>
                <CardDescription>5.000 TL'ye kadar hızlı finansman</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Cenaze masrafları için anında onaylanan mikro kredi. Minimum belge ile hızlı başvuru.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Kredi Tutarı:</span>
                    <span className="font-medium">1.000 TL - 5.000 TL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Faiz Oranı:</span>
                    <span className="font-medium">%0.89 (aylık)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Vade:</span>
                    <span className="font-medium">3 - 12 ay</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Onay Süresi:</span>
                    <span className="font-medium">24 saat</span>
                  </div>
                </div>
                <div className="rounded-md bg-muted p-3">
                  <div className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <strong>Gerekli Belgeler:</strong> Kimlik fotokopisi, ikametgah belgesi, gelir belgesi (maaş
                      bordrosu veya emekli maaşı dekontu)
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Hemen Başvur</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cenaze Masrafları Kredisi</CardTitle>
                <CardDescription>10.000 TL'ye kadar finansman</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Daha yüksek tutarlı cenaze masrafları için özel kredi. Esnek geri ödeme seçenekleri.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Kredi Tutarı:</span>
                    <span className="font-medium">5.000 TL - 10.000 TL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Faiz Oranı:</span>
                    <span className="font-medium">%0.99 (aylık)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Vade:</span>
                    <span className="font-medium">6 - 24 ay</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Onay Süresi:</span>
                    <span className="font-medium">48 saat</span>
                  </div>
                </div>
                <div className="rounded-md bg-muted p-3">
                  <div className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <strong>Gerekli Belgeler:</strong> Kimlik fotokopisi, ikametgah belgesi, gelir belgesi, ölüm
                      belgesi
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Detaylı Bilgi</Button>
              </CardFooter>
            </Card>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Kredi Başvuru Süreci</CardTitle>
                  <CardDescription>Mikro kredi başvurusu nasıl yapılır?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        1
                      </div>
                      <h3 className="font-medium">Başvuru Formu</h3>
                      <p className="text-sm text-muted-foreground">
                        Online başvuru formunu doldurun ve gerekli belgeleri yükleyin
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        2
                      </div>
                      <h3 className="font-medium">Değerlendirme</h3>
                      <p className="text-sm text-muted-foreground">
                        Başvurunuz 24 saat içinde değerlendirilir ve size bilgi verilir
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        3
                      </div>
                      <h3 className="font-medium">Ödeme</h3>
                      <p className="text-sm text-muted-foreground">
                        Onaylanan kredi tutarı anında banka hesabınıza aktarılır
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Sıkça Sorulan Sorular
                  </Button>
                  <Button>
                    Başvuru Formuna Git
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="belediye" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Belediye Cenaze Hizmetleri</CardTitle>
              <CardDescription>Ücretsiz cenaze hizmetleri ve destekler</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Türkiye'deki belediyeler, vatandaşlara ücretsiz cenaze hizmetleri sunmaktadır. Bu hizmetlerden
                yararlanmak için belediyenin cenaze hizmetleri birimine başvurmanız yeterlidir.
              </p>

              <div className="space-y-4">
                <h3 className="font-medium">Sunulan Hizmetler</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Cenaze Yıkama ve Kefenleme</p>
                      <p className="text-sm text-muted-foreground">
                        Dini vecibelere uygun olarak cenaze yıkama ve kefenleme hizmeti
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Cenaze Nakil</p>
                      <p className="text-sm text-muted-foreground">Şehir içi ve şehirlerarası cenaze nakil hizmeti</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Mezar Kazma ve Defin</p>
                      <p className="text-sm text-muted-foreground">Mezar yeri kazma ve defin işlemleri</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Taziye Çadırı</p>
                      <p className="text-sm text-muted-foreground">Taziye için çadır kurulumu (bazı belediyelerde)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-md bg-muted p-4">
                <h3 className="font-medium mb-2">Başvuru İçin Gerekli Belgeler</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Ölüm Belgesi (Defin Ruhsatı)</li>
                  <li>• Vefat eden kişinin kimlik fotokopisi</li>
                  <li>• Başvuran kişinin kimlik fotokopisi</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Belediyenizi Seçin
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="sgk" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>SGK Cenaze Yardımı</CardTitle>
              <CardDescription>Sosyal Güvenlik Kurumu tarafından sağlanan cenaze yardımı</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SGK, vefat eden sigortalıların hak sahiplerine cenaze yardımı ödemesi yapmaktadır. Bu yardımdan
                faydalanmak için SGK'ya başvurmanız gerekmektedir.
              </p>

              <div className="space-y-2">
                <h3 className="font-medium">Kimler Faydalanabilir?</h3>
                <p className="text-sm text-muted-foreground">Aşağıdaki durumlarda cenaze yardımı alınabilir:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm">
                      İş kazası veya meslek hastalığı sonucu vefat eden sigortalının hak sahipleri
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm">
                      Malullük, yaşlılık veya ölüm sigortasından aylık almakta iken vefat eden sigortalının hak
                      sahipleri
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm">
                      En az 360 gün malullük, yaşlılık ve ölüm sigortası primi bildirilmiş sigortalının hak sahipleri
                    </p>
                  </li>
                </ul>
              </div>

              <div className="rounded-md bg-muted p-4">
                <h3 className="font-medium mb-2">Başvuru İçin Gerekli Belgeler</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Cenaze yardımı talep dilekçesi</li>
                  <li>• Vefat eden kişinin ölüm belgesi</li>
                  <li>• Başvuran kişinin kimlik fotokopisi</li>
                  <li>• Başvuran kişinin banka hesap bilgileri</li>
                </ul>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">2023 Yılı Cenaze Yardımı Tutarı</h3>
                  <p className="text-sm text-muted-foreground">Güncel cenaze yardımı tutarı</p>
                </div>
                <div className="text-2xl font-bold">2.000 TL</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">SGK Başvuru Formunu İndir</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

