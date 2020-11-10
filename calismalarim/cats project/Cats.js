import React from "react";
import {FlatList, SafeAreaView, ScrollView, Text, TextInput, View, Image, Dimensions} from "react-native";


import {CatsCard} from "./components";


const cats_data = [
    {
        id: 0,
        title: "İran Kedisi",
        description: "İran kedisi (Persian), zekası, dostluğa ve aileye olan bağlılığı ile bilinen tüylü kediler arasındadır. Bakımı ise biraz zahmetlidir. Her gün düzenli olarak fırçalanması gerekir. Yumuşak bir fırça ve nazikçe fırçalanmalı ve mümkünse kuru şampuan ile temizlenmeli.İran kedisi, evde beslenebilecek kedi cinsleri arasında.",
        imageUrl: "https://blog.n11.com/wp-content/uploads/2016/05/birbirinden-sevimli-11-kedi-cinsi.jpg"
    },
    {
        id: 1,
        title: "Chinchilla",
        description: "İran kedisi (Persian), zekası, dostluğa ve aileye olan bağlılığı ile bilinen tüylü kediler arasındadır. Bakımı ise biraz zahmetlidir. Her gün düzenli olarak fırçalanması gerekir. Yumuşak bir fırça ve nazikçe fırçalanmalı ve mümkünse kuru şampuan ile temizlenmeli. İran kedisi, evde beslenebilecek kedi cinsleri arasında.",
        imageUrl: "https://www.petguide.com/wp-content/uploads/2018/08/chinchilla-cat.jpg"
    },
    {
        id: 2,
        title: "British Shorthair",
        description: "İngiltere kökenli bir kedi ırkı olan British Shorthair, yoğun ve pelüş tüyleri ile dikkat çekmekte. Tüylü kediler seviyorsanız,  bu kedi türünün tüylerinin çok uzun olmadığını söyleyelim. Yuvarlak yanakları ve tombul vücutları ile evde beslemeybu kedi türünü çok beğeneceksiniz. Orta boy olan kulaklarının uçları yuvarlaktır vee ideal. Tüyleri çok uzun olmadığı için düğümlenmez ve bakımı daha kolaydır.",
        imageUrl: "https://i.pinimg.com/originals/ab/b6/38/abb638f484c42120705d98a6e24541b4.jpg"
    },
    {
        id: 3,
        title: "Maine Coon",
        description: "Büyük ve tüylü kedileri kim sevmez ki? Maine Coon kedi cinsi tam da bu tanıma uyuyor. Sessiz, dost canlısı ve insanlara bağlı olan bu cins kedi oldukça fazla bakım gerektiriyor. Uzun tüylerini tek başına temizleyemedikleri için sahiplerinin yardımına ihtiyaç duyarlar. Hareketli yapıları olduğu için genellikle hareketli insanlar tarafından tercih edilir. Ağaca tırmanmayı seven Maine Coon kedileriyle kampa gidebilirsiniz.",
        imageUrl: "https://ajanimo.com/wp-content/uploads/2019/05/Maine-Coon-Cat-Breed-Information-758x426.jpg"
    },
    {
        id: 4,
        title: "Scottish Fold",
        description: "Devamlı sevmek isteyeceğiniz, kucağınızdan bırakmak istemeyeceğiniz kedi cinsi arıyorsanız, Scottish Fold tam size göre. Sevimli görüntüsü ve akıllı hali ile kısa sürede bulunduğu ortama uyum sağlar. Sevecen yapısı ile aile bireylerine kendini kolayca sevdirir. Scottish Fold kedi cinsi, evde yalnız kaldığı zaman da sıkılmaz. Yoğun tempoda çalışanlar evde beslenebilecek kediler arasından bu cinsi tercih edebilir. Tabi ona oyalanacağı bir sürü oyuncak almaları faydalı olacaktır.",
        imageUrl: "https://kediblog.com/wp-content/uploads/scottish-fold-ve-ozellikleri-1.jpg"
    },
    {
        id: 5,
        title: "American Shorthair",
        description: "Fazla bakım gerektirmeyen bir kedi cinsi arıyorsanız American Shorthair beslemeyi tercih edebilirsiniz. Özgürlüğüne düşkün olan bu kedi türü, zeki ve hareketlidir. Çocuklarla da oldukça iyi anlaşır. Aynı zamanda evde beslenebilecek en tatlı kedi cinsleri arasında yer alır.",
        imageUrl: "https://blog.n11.com/wp-content/uploads/2016/05/american-shorthair.jpg"
    },
    {
        id: 6,
        title: "Exotic Shorthair",
        description: "Narin bir kedi ırkından olan Exotic Shorthair’ın bakımı biraz zahmetli olabilir. İran kedisiyle American Shorthair kırması olan kedi cinsidir. İran kedisi gibi yumuk suratı bulunur. Tüyleri ise kısa ve yumuşacıktır. Tüylü kedi cinsi olduğu için düzenli olarak fırçalanmalıdır. Bu cins, ülkemizde çok az sayıda bulunur.",
        imageUrl: "https://www.petoloji.com/wp-content/uploads/2020/01/exoric.jpg"
    },
    {
        id: 7,
        title: "Birman Kedisi",
        description: "Gözleri mavi olan bir kedi cinsidir. Sahibine çok düşkün olduğu kadar kucakta durmayı da çok sever. En sakin kedi cinsleri arasında olduğunu söyleyebiliriz. Devamlı kucağınızda sevebileceğiniz bir kedi istiyorsanız, sakin yapıya sahip olan Birman kedilerinden edinebilirsiniz. Uzun ve ipeksi yapıdaki tüylerini düzenli fırçalamakta fayda var.",
        imageUrl: "https://candostum.net/uploads/images/2020/07/08/ragdoll-kedisijpg-5f05bf25b2aeb.jpg"
    },
    {
        id: 8,
        title: "Tiffanie",
        description: "Tiffanie cinsi kedilerin en belirgin özelliği nazik, sevecen ve yumuşak huylu olmasıdır. Sahibinin duygularını anlayan ve değer veren hassas bir yapısı vardır. Zeki ve oyuncu olmalarının yanında kucakta durmayı da severler. Uzun tüylü kediler gibi bakım gerektirmese de düzenli olarak taranması ve fırçalanması faydalı olacaktır.",
        imageUrl: "https://burvet.com/wp-content/uploads/2019/03/1-tiffanie-cat-jean-michel-labat.jpg"
    },
    {
        id: 9,
        title: "Van Kedisi",
        description: "Kendini temizleme konusunda son derece becerikli olan bu kedi türü aynı zamanda zeki ve insana bağlıdır. Suda oynamayı seven ve yüzen tek kedi türü Van kedisidir. Kucağa alınmaktan hoşlanmayan ve iyi bir avcı olmasıyla bilinir. Gözlerinin biri kehribar biri mavi olan nadide bir kedi ırkıdır.",
        imageUrl: "https://blog.n11.com/wp-content/uploads/2016/05/van-kedisi.jpg"
    },
    {
        id: 10,
        title: "Bengal Kedisi",
        description: "Benekli türdeki evcil kedilerdir. Özel cins kedi olarak yetiştirilirler. Orta büyüklükte ve egzotik türdedirler. Yabani bir güzelliği sahip olduğu kadar yeteneklidirler. Hareketli yapıya sahip oldukları için devamlı oyun oynamaya hazırdırlar. Tasma takarak dolaştırmaya çıkabilirsiniz.",
        imageUrl: "https://blog.n11.com/wp-content/uploads/2016/05/bengal.jpg"
    },
    {
        id: 11,
        title: "Tekir",
        description: "Tekir kedi kendi arasında birçok alt türe sahiptir. Bu türlerin de fiziksel özellikleri kendi içinde değişmektedir. Tekir kedilerin tüy yapısı kısa ya da uzun olabilmektedir, renkleri de türlerine göre değişmektedir. Hatta renklerine göre bu alt türler isimlendirilmiştir. Genel olarak bunlardan bahsedecek olursa Mavi Tekir Kedi, Kahverengi Tekir, Kahverengi Yamalı Tekir, Kestane Renkli Tekir Kedi gibi 50’ye yakın renge göre adlandırılmış tekir kedi türü bulunmaktadır. Tekir kedilerin vücut yapısı orta büyüklüktedir. Ortalama kiloları ise 2 ile 8 kg arasında değişmektedir.",
        imageUrl: "https://www.petburada.com/Uploads/Blog/Tekir-Kedi-aee4.jpg"
    },
];
const banner_data = [
    {
        id : 0,
        imageUrl: "https://i.pinimg.com/originals/d5/0e/8e/d50e8e2021a29dc9d9cc969077058efe.png"
    },
    {
        id : 1,
        imageUrl: "https://www.pekguzelsozler.com/wp-content/uploads/2019/08/Hayvan-Sevgisi-%C4%B0le-%C4%B0lgili-S%C3%B6zler.jpg"
    },
    {
        id : 2,
        imageUrl: "https://www.sozunenguzeli.com/wp-content/uploads/2019/10/Kediler-ile-ilgili-En-G%C3%BCzel-S%C3%B6zler.jpg"
    },
    {
        id : 3,
        imageUrl: "https://www.mctuncer.com/wp-content/uploads/2018/06/Kediler-ile-ilgili-S%C3%B6zler-448x280.jpg"
    },
    {
        id : 4,
        imageUrl: "https://lh3.googleusercontent.com/proxy/l0Jsl6dfwqj3ubYZFeSAmr0NXTgp63k3jKGFxkR0sXhbAqWEvzFCv2pNVgG9cUTu2AnCykxeeGIUsLbWAZ1izurbn6xIAscl57XwboXYv11ZOVFEeHfayHzLorhdCVSCJAK_A4HbROd0vg0rNDG9M8jHOitU"
    },
]

const Cats = () => {

    // const renderCatsData = ({item}) => <Text>{item.title}</Text>
    const renderCatsData = ({item}) => <CatsCard cats={item}/>

    const listHeader = () => {
        return(
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                banner_data.map(banner_item => {
                    return(
                        <Image
                            source={{uri: banner_item.imageUrl}}
                            style={{
                                 width: Dimensions.get("window").width * 0.97,
                                 height: Dimensions.get("window").height * 0.3,
                                 margin: 5,
                                 borderRadius: 10
                                 }}
                         />
                    )
                })
            }
        </ScrollView>
        )
    }



    return (
        <SafeAreaView style={{flex:1}} >

           <FlatList
           keyExtractor={(item, index) => index.toString()}   // index.toString yerine index.id.toStrig yazabiliriz elimizde hangi bilgi varsa ona gore secerim
           data={cats_data}
           // renderItem={(data) => console.log(data)}
           // renderItem={(data) => <Text>{data.item.title}</Text>}
           // renderItem={({item}) => <Text>{item.title}</Text>}
           renderItem={renderCatsData}
        //    numColumns={2}
        ListHeaderComponent={listHeader}
           />
           
        </SafeAreaView>
        
    )
}

export default Cats;