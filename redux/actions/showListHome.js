import * as types from './types'
// import listHome from '../../data/listhome.json'
var listHome = [
    {
        quantity: "Số lượng phòng - 5 phòng",
        star: 4,
        name: "Lotte Legend Hotel Saigon",
        price: "4.558.147Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Tuấn Đặng",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh , WiFi trong phòng, Bể bơi, Bãi đỗ xe, Chấp nhận vật nuôi,...",
        email: "tuandangminhttt.@gmail.com",
        phone: "+84(8)8233333",
        address:"2A-4A, Đường Tôn Đức Thắng, Quận 1, 700000, TP. Hồ Chí Minh, Việt Nam",
        detail:"The Lotte Legend Hotel Saigon provides a great place for travelers to relax after a busy day. Traveling to the hotel is easy with Hoa Hung Train Station located approximately 5km away and Tan Son Nhat International Airport roughly 14km away. Guests will find Pham Ngu Lao Street and Quận 1 just a short distance from the hotel.",
        images:[require('../../images/lottelegend.jpg'), require('../../images/lottelegend1.jpg'), require('../../images/lottelegend3.jpg')],
    

    },
    {
        quantity: "Số lượng phòng - 4 phòng",
        star: 3,
        name: "AHA Boutique Hotel",
        price: "765,000Đ / Người",
        date: "23/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Tuấn Đặng",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "Bể bơi ngoài trời , Concierge, Dịch vụ giặt ủi, Dịch vụ phòng, Ghế dài tắm nắng,...",
        email: "tuandangminhttt.@gmail.com",
        phone: "84(8)38373533",
        address:"24-26-28 Bùi Viện, Phạm Ngũ Lão, Hồ Chí Minh, Quận 1, Hồ Chí Minh",
        detail:"Khách sạn Aha Boutique tọa lạc tại vị trí đắc địa trên con phố Bùi Viện, thuộc trung tâm thành phố Hồ Chí Minh. Nơi đây được biết đến là một trong những điểm nghỉ ngơi thu hút đông đảo khách du lịch trong nước cũng như khách quốc tế tin tưởng lựa chọn khi đến với thành phố sôi động này. Sân bay Quốc tế Tân Sơn Nhất cách khách sạn 7.5 km, du khách chỉ cần lái xe khoảng 25 phút để di chuyển giữa 2 địa điểm.Đặc điểm khách sạn Aha Boutique",
        images:[require('../../images/aha.jpg'),require('../../images/aha1.jpg'), require('../../images/aha2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 7 phòng",
        star: 5,
        name: "Glenwood City Resort",
        price: "1.491.129Đ / Người",
        date: "22/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Tuấn Đặng",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "Bãi đỗ xe , Bể bơi ngoài trời, Cửa hàng tạp hóa, Dịch vụ giặt ủi, Dịch vụ phòng,...",
        email: "tuandangminhttt.@gmail.com",
        phone: "+84 837442068",
        address:"243 Nguyen Van Huong Street, Thao Dien Ward, District 2, 70000, TP. Hồ Chí Minh, Việt Nam",
        detail:"Nằm ẩn mình trong khu vườn Nhật Bản riêng, Glenwood City Resort cung cấp chỗ nghỉ tại trung tâm khu Thảo Điền với tầm nhìn ra quang cảnh Sông Sài Gòn. Resort cung cấp WiFi miễn phí trong toàn khuôn viên, bể bơi ngoài trời và du khách có thể dùng bữa ở nhà hàng nơi đây hoặc thưởng thức bữa ăn tại phòng qua dịch vụ phòng.Du khách có thể bắt xe buýt số 35 đến Chợ Bến Thành trong vòng 30 phút ở bến xe buýt bên ngoài cổng resort. Chỗ nghỉ cách Bảo tàng Lịch sử Việt Nam 3,9 km. Glenwood City Resort nằm trong bán kính 4,2 km từ Chùa Ngọc Hoàng và 5 km từ Trung tâm Mua sắm Vincom",
        images:[require('../../images/glenwood.jpg'), require('../../images/glenwood1.jpg'), require('../../images/glenwood2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 2 phòng",
        star: 5,
        name: "Khách Sạn Saphir Đà Lạt",
        price: "1.275.112Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Tuấn Đặng",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "tuandangminhttt.@gmail.com",
        phone: "+84(63)3556000",
        address: "09 Phan Như Thạch, 670000, Đà Lạt, Việt Nam",
        detail:"Located in the heart of Da Lat City, Dalat Hotel Saphir offers modern rooms with free Wi-Fi. Overlooking a courtyard, the boutique hotel features the owner’s collectibles and antiques, which include an antique motorbike and film projector.",
        images:[require('../../images/saphir.jpg'),require('../../images/saphir1.jpg'), require('../../images/saphir2.jpg') ]
    },
    {
        quantity: "Số lượng phòng - 7 phòng",
        star: 5,
        name: "River Prince Đà Lạt",
        price: "838.030Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Lam",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "tuandangminhttt.@gmail.com",
        phone: "+84(63)3565888",
        address: "135-145 Phan Đình Phùng, 670000, Đà Lạt, Việt Nam",
        detail:"Cách Chợ Trung tâm Đà Lạt và Hồ Xuân Hương tuyệt đẹp 10 phút đi bộ, River Prince cung cấp phòng nghỉ có lò sưởi ấm áp với Wi-Fi miễn phí. Khách sạn có 2 nhà hàng, các khu vực có máy tính và bàn bán tour.",
        images:[require('../../images/riverdalat.jpg'), require('../../images/riverdalat1.jpg'), require('../../images/riverdalat2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 5 phòng",
        star: 5,
        name: "Royal Đà Lạt",
        price: "480.127Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Lam",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "tuandangminhttt.@gmail.com",
        phone: "+84(63) 356 11 99",
        address: "24 Nguyen Chi Thanh, W 1, 84633, Đà Lạt, Việt Nam",
        detail:"Royal Dalat Hotel tọa lạc ở đường Nguyễn Chí Thanh, trung tâm thành phố Đà Lạt. Khách sạn cách Hồ Xuân Hương 1.1 m, vườn hoa Đà Lạt 1.8km và Thiền viện Trúc Lâm 4.3km. Sân bay Liên Khương cách đó 22.3 km với 40 phút di chuyển nhanh chóng. Đặc biệt hơn, du khách sẽ được đón sân bay miễn phí với hóa đơn chỉ từ 1.500.000 VNĐ nhé!",
        images:[require('../../images/royaldalat.jpg'), require('../../images/royaldalat1.png'), require('../../images/royaldalat2.png')]
    },
    {
        quantity: "Số lượng phòng - 5 phòng",
        star: 5,
        name: "Hạ Long Paradise Suites",
        price: "1.196.995Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Lam",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "hlpardise.@gmail.com",
        phone: "+84 986 567 545",
        address: "Tuần Châu, 200000, Hạ Long, Việt Nam",
        detail:"Paradise Suites Hotel cung cấp chỗ nghỉ với các tiện nghi hiện đại trên Đảo Tuần Châu tuyệt đẹp, trong khoảng cách ngắn tới Bến thuyền Tuần Châu, cửa ngõ đưa khách tới với Vịnh Hạ Long. Khách sạn tự hào có trung tâm spa và nhà hàng ngay trong khuôn viên. Du khách được miễn phí truy cập Wi-Fi miễn phí trong toàn bộ khuôn viên cũng như sử dụng chỗ đỗ xe tại đây. Dịch vụ đưa đón của chỗ nghỉ sẽ giúp khách đi tới bãi biển và hồ bơi ngoài trời.",
        images:[require('../../images/Paradisesuite.jpg'), require('../../images/Paradisesuite1.jpg'), require('../../images/Paradisesuite2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 5 phòng",
        star: 5,
        name: "Wyndham Legend Hạ Long",
        price: "2.431.986Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Lam",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "hlpardise.@gmail.com",
        phone: "+84 986 567 545",
        address: "12 Hạ Long, phường Bãi Cháy, thành phố Hạ Long, Hạ Long, Việt Nam",
        detail:"Nằm tại phường Bãi Cháy của tỉnh Quảng Ninh, cách trung tâm thành phố Hạ Long chỉ 6,5 km, Wyndham Legend Halong có hồ bơi ngoài trời cho khách thư giãn sau một ngày dài tham quan, 2 nhà hàng ngay trong khuôn viên, 2 quán bar, sảnh club lounge và trung tâm thể dục.",
        images:[require('../../images/wyndhamlegend.jpg'), require('../../images/wyndhamlegend1.jpg'), require('../../images/wyndhamlegend2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 5 phòng",
        star: 5,
        name: "Vinpearl Resort & Spa Ha Long",
        price: "2.700.081Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Lam",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "hlpardise.@gmail.com",
        phone: "+84 2033556868",
        address: "Reu Island, Bai Chay Ward, Hạ Long, Việt Nam",
        detail:"Khách sạn Vinpearl Ha Long Bay Resort 5 sao sang trọng có khu vực bãi biển riêng và spa thư giãn. Tọa lạc trên Đảo Rêu, resort có 3 lựa chọn ăn uống và cung cấp Wi-Fi miễn phí. Du khách có thể sử dụng hồ bơi ngoài trời, sân tennis và trung tâm thể dục.",
        images:[require('../../images/vinpearlhl.jpg'),require('../../images/vinpearlhl1.jpg'), require('../../images/vinpearlhl2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 3 phòng",
        star: 4,
        name: "Khách sạn Paris Nha Trang",
        price: "170.050Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Lam",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "hlpardise.@gmail.com",
        phone: "+84 2033556868",
        address: "96b1 Trần Phú, Phường Lộc Thọ, 650000, Nha Trang, Việt Nam",
        detail:"Chỗ nghỉ này cách bãi biển 1 phút đi bộ. Với hồ bơi ngoài trời, Paris Nha Trang Hotel nằm ở thành phố Nha Trang, cách Trung tâm Thuyền buồm Việt Nam 700 m. Khách sạn cũng có quầy bar trong khuôn viên.",
        images:[require('../../images/parisnhatrang.jpg'), require('../../images/parisnhatrang1.jpg'), require('../../images/parisnhatrang2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 3 phòng",
        star: 4,
        name: "Sun City Nha Trang",
        price: "560.103Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Lam",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "ntsuncity.@gmail.com",
        phone: "+84(58)3521957",
        address: "4 Tôn Đản, Ven Biển, 650000, Nha Trang, Việt Nam",
        detail:"Khách sạn Sun City Hotel Nha Trang tọa lạc trên đường Tôn Đản, cách bãi biển Nha Trang 2 phút đi bộ, cách Quảng Trường 2 tháng 4 100m. Khách sạn cách Ga Nha Trang và chợ Đầm 1km, đến Sân bay Cam Ranh 35km. Với vị trí thuận lợi, bạn dễ dàng sắp xếp lịch trình khám phá những điểm du lịch nổi tiếng ở Nha Trang.",
        images:[require('../../images/suncitynt.jpg'), require('../../images/suncitynt1.jpg'), require('../../images/suncitynt2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 3 phòng",
        star: 4,
        name: "Six Senses Ninh Van Bay",
        price: "8.582.230Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Ho",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "sixsense.@gmail.com",
        phone: "+84(58)3728222",
        address: "Ninh Van bay, Ninh Hoa, Khanh Hoa, 650000, Nha Trang, Việt Nam",
        detail:"Chỗ nghỉ này cách bãi biển 2 phút đi bộ. Với tầm nhìn ra quanh cảnh biển, Six Senses Ninh Van Bay Vietnam cung cấp các biệt thự sang trọng và rộng rãi có hồ bơi riêng. Nơi nghỉ này có 1 spa, 4 nhà hàng và cách thành phố Nha Trang 20 phút đi tàu thuyền.",
        images:[require('../../images/sixsense.jpg'), require('../../images/sixsense1.jpg'), require('../../images/sixsense2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 3 phòng",
        star: 4,
        name: "Golden Lotus Luxury",
        price: "1.067.066Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Ho",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "sixsense.@gmail.com",
        phone: " +84(4)38285888",
        address: "53-55 Hàng Trống, Quận Hoàn Kiếm, 100000, Hà Nội, Việt Nam",
        detail:"Golden Lotus Luxury Hotel tọa lạc ở một vị trí thuận tiện cách Hồ Hoàn Kiếm nổi tiếng trong vòng 5 phút đi bộ. Khách sạn có lễ tân 24 giờ và các phòng nghỉ rộng rãi với lối trang trí hiện đại. Tại đây còn có Wi-Fi miễn phí, spa và hồ bơi trong nhà trên tầng mái.",
        images:[require('../../images/goldenlotus.jpg'), require('../../images/goldenlotus1.jpg'), require('../../images/goldenlotus2.jpg')]
    },
    {
        quantity: "Số lượng phòng - 3 phòng",
        star: 4,
        name: "Khách sạn Lake Side",
        price: "1.537.096Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Ho",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "sixsense.@gmail.com",
        phone: "+84(4)38350111",
        address: "23 Ngọc Khánh, 100000, Hà Nội, Việt Nam",
        detail:"Lake Side Hotel is a popular choice amongst travelers in Hanoi, whether exploring or just passing through. Both business travelers and tourists can enjoy the hotel's facilities andservice. Free Wi-Fi in all rooms, 24-hour roomservice facilities for disabled guests, Wi-Fi in public areas, valet parking are there for guest's enjoyment. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel offers various recreational opportunities. For reliableserviceand professional staff, Lake Side Hotel caters to your needs.",
        images:[require('../../images/lakehn.jpg'), require('../../images/lakehn1.jpg'), require('../../images/lakehn2.jpg')]
    },
    {
        quantity: "Số lượng phòng -  phòng",
        star: 4,
        name: "Khách Sạn Authentic Hà Nội",
        price: "1.269.798Đ / Người",
        date: "28/10/2018",
        category: "Nhà ở & Khách sạn",
        poster: "Jully Tan",
        opentime: "Mở cửa 8h - 23h30 ",
        service: "WiFi tại sảnh ,Bãi đỗ xe, Chấp nhận vật nuôi, Dịch vụ giặt ủi,...",
        email: "authentic.@gmail.com",
        phone: "+84(4)39615999",
        address: "13 Lý Thái Tổ, 100000, Hà Nội, Việt Nam",
        detail:"Khách sạn 4 sao với 2 nhà hàng, gần Nhà hát Múa rối Nước Thăng Long",
        images:[require('../../images/authentic.jpg'),require('../../images/authentic1.jpg'), require('../../images/authentic2.jpg') ]
    }
]

const  showListHome=()=>{
    const action = dispatch =>{
        if(listHome){
            dispatch(setListHome(listHome));
           return listHome;      
        }
    }
    return action;
}
const setListHome=(listHome)=>{
    return {
        type: types.LIST_HOME,
        listHome,
    }
}

export {
    showListHome,
    setListHome,

}