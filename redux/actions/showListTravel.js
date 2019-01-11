import * as types from './types'
const listTravel = [
    {
        status: "Đang mở cửa",
        star: 5,
        name:"Công Viên Cá Koi Rin Rin Park - Vườn Nhật Bản",
        price: "50.000đ - 100.000đ",
        date: "22/12/2018",
        category : "Tham quan & chụp ảnh, Du lịch sinh thái",
        author : "Tiến Trương",
        opentime : "Mở cửa 8h - 23h30 ",
        service : "Vườn Nhật Bản là địa chỉ tham quan mới cho nhu cầu du lịch xanh của người dân thành phố",
        email:  "tientv@gmail.com",
        phone: "09647376541",
        address : "Công Viên Đá Nhật - RinRin Park. Xuân Thới Thượng, 87/8p ấp Xuân Thới Đông 1. Xuân Thới Đông. Hóc Môn, Hồ Chí Minh 700000, Việt Nam",
        detail:"Cùng chuyến đi từ Cần Thơ đi công viên kỳ quan Long An, tụi mình chạy thêm 1 đoạn tầm 14km tới Hóc Môn - TPHCM. Tụi mình tham quan công viên Đá Nhật bản - Rin rin park. Vé vào cổng là 50k/người. ",
        images:[require('../../images/travel/k.jpg'), require('../../images/travel/koi1.jpg'), require('../../images/travel/k.jpg')],

    },
    {
        status: "Đang mở cửa",
        star: 4,
        name:"Công Viên Sông Nước Sala",
        price: " 0đ - 0đ",
        date: "22/12/2018",
        category : " Tham quan & chụp ảnh",
        author : "Tiến Trương",
        opentime : "Mở cửa 8h - 23h30 ",
        service : "Cung cấp thức ăn nhẹ , cà phê",
        email:  "tientv@gmail.com",
        phone: "Đang cập nhật",
        address : "10 Mai Chí Thọ, Quận 2, Hồ Chí Minh 700000, Việt Nam",
        detail:"Lần đầu đến nơi này thật sự bị choáng ngợp bởi không gian rộng lớn của nó. Công viên rất đẹp luôn ấy, bị siêu lòng liền. Vì là khu đô thị mới nên cũng khá ít người biết đến nên cảm thấy không quá ồn ào, xô bồ như ở trong trung tâm thành phố. Buổi chiều tối mọi người thường ra đây dạo, ngồi vui chơi. Cảm giác sau 1 ngày làm việc học hành mệt mỏi ra đây để tìm sự thư giãn là rất tuyệt vời luôn. Cây cảnh xanh tươi, cách trang trí của công việc cũng rất đẹp mắt, tha hồ cho các bạn trẻ chụp hình check - in sống ảo",
        images:[require('../../images/travel/sala.jpg'), require('../../images/travel/sala1.jpg'), require('../../images/travel/sala.jpg')],
    },
    {
        status: "Đang mở cửa",
        star: 5,
        name:"Ngôi Làng Bắc Âu - AEON Mall",
        price: "35000 - 50000 vnd",
        date: "22/12/2017",
        category : " Tham quan & chụp ảnh",
        author : "Tiến Trương",
        opentime : "Mở cửa 8h - 23h30 ",
        service : "Cung cấp thức ăn nhẹ , cà phê",
        email:  "tientv@gmail.com",
        phone: "Đang cập nhật",
        address : "30 Bờ Bao Tân Thắng, P. Sơn Kỳ, Quận Tân Phú, Hồ Chí Minh 700000, Việt Nam",
        detail:"Những cảm giác thật thú vị dưới cái lạnh 10 độ C, thích quá thích Địa điểm: AEON MALL Celadon Tân Phú Thời gian: Từ 9:00 ngày 18/12/2015 (Thứ sáu) đến 21:00 ngày 03/01/2016 (Chủ nhật) 30/11/2015 Giá vé: -Người lớn 100,000 VND, trẻ em: 50,000 VND",
        images:[require('../../images/travel/AONE.jpg'), require('../../images/travel/AONE1.jpg'), require('../../images/travel/AONE.jpg')],

    }
]
const showListTravel = ()=>{
    const action = dispatch =>{
        if(listTravel){
            dispatch(setListTravel(listTravel));
            return listTravel;
        }
    }
    return action;
}

const setListTravel = (listTravel)=>{
    return {
        type: types.LIST_TRAVEL,
        listTravel
    }
}

export {
    showListTravel,
    setListTravel
}