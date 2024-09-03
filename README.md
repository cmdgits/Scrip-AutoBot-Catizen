

AutoBot cho Catizen
Kịch bản này mở khóa nút chế độ "Tự động" trong trò chơi mà không yêu cầu chi phí 3900 $Fish.


##Đặc trưng -Tự động tăng tốc -Tự động hợp nhất mèo -Tự động mua mèo miễn phí -Tự động xóa mèo cấp thấp -Tự động thu thập tiền thưởng Airdrop

Bật Chế độ gỡ lỗi cho ứng dụng
Android
**Bật gỡ lỗi USB**trên thiết bị của bạn.
Trong Cài đặt Telegram, cuộn xuống hết cỡ, nhấn và giữ số phiên bản hai lần.
Chọn Bật gỡ lỗi WebView trong Cài đặt gỡ lỗi.
Kết nối điện thoại của bạn với máy tính và mở chrome://inspect/#devices trong Chrome – bạn sẽ thấy Ứng dụng nhỏ của mình ở đó khi khởi chạy ứng dụng này trên điện thoại.
Telegram Desktop trên Windows và Linux
Tải xuống và khởi chạy **Phiên bản Beta**của Telegram Desktop trên Windows hoặc Linux (chưa được hỗ trợ trên Telegram Desktop cho macOS).
Đi tới Cài đặt > Nâng cao > Cài đặt thử nghiệm > Bật kiểm tra chế độ xem web.
Nhấp chuột phải vào WebView và chọn Kiểm tra.
Telegram macOS
Tải xuống và khởi chạy **Phiên bản Beta**của Telegram macOS.
Nhấp nhanh 5 lần vào biểu tượng Cài đặt để mở menu gỡ lỗi và bật “Gỡ lỗi ứng dụng mini”.
Khởi chạy tập lệnh
Thực hiện theo các bước bên dưới để khởi chạy tập lệnh:

Mở trò chơi trong Ứng dụng web Telegram và trình kiểm tra web của trình duyệt của bạn. Bạn có thể thực hiện việc này bằng cách nhấp chuột phải vào trang và chọn **"Inspect"**hoặc "Inspect Element"(tùy thuộc vào trình duyệt).

Đi tới tab **"Sources"**trong trình kiểm tra web.

Tìm tệp "bundle-*.js". Nó nằm trong thư mục "tgCat/game/cat/js".

Mở tệp **"bundle-*.js"**và tìm dòng có điều kiện t([e("leaguechange")], N.prototype, "updateBg", null),.

Đặt Brake Point tại đường này. Bạn có thể thực hiện việc này bằng cách nhấp vào số dòng ở bên trái của mã hoặc nhấn phím F9trên bàn phím.

Tải lại trang bằng cách nhấn F5trên bàn phím.

Chuyển sang tab "Bảng điều khiển". Trong bảng điều khiển ở cuối trang, nhập tập lệnh đã sao chép và nhấn phím Enter.

const consoleRed = 'font-weight: bold; color: red;';
const consoleGreen = 'font-weight: bold; color: green;';
const consolePrefix = '%c [AutoBot] ';

console.clear();
console.log(`${consolePrefix}Đang chèn...`, consoleGreen);

try {
    function onClickAuto() {
        P.cat.isAuto = !P.cat.isAuto;
        if (P.cat.isAuto) {
            this.ani8.play(0, true);
            Laya.timer.loop(500, this, this.checkAuto);
            this.checkFreeCat();
            this.m_btn_AutoSetting.visible = true;
        } else {
            Laya.timer.clearAll(this.checkAuto);
            this.ani8.stop();
            Laya.timer.loop(5000, this, this.checkSum);
            this.m_btn_AutoSetting.visible = false;
        }
        this.m_img_StopAuto.visible = !P.cat.isAuto;
        u(`AutoBot ${P.cat.isAuto ? 'đã kích hoạt' : 'đã tắt'}!\n\nĐược crack bởi @nuller`);
    }
    
    // Gán hàm onClickAuto vào prototype của N thay vì M
    N.prototype.onClickAuto = onClickAuto;
    console.log(`${consolePrefix}Script đã tải`, consoleGreen);
    

} catch (e) {
    console.log(`${consolePrefix}Đã xảy ra lỗi, điểm dừng được đặt không đúng!`, consoleRed);
    console.log(`${consolePrefix}Vui lòng làm theo hướng dẫn, và bạn sẽ thành công :*`, consoleRed);
  
}
Để tắt trình gỡ lỗi, hãy quay lại tab **"Sources"**và nhấp vào Brake Point để xóa nó. Bạn cũng có thể nhấn lại phím F9để xóa Brake Point.
Đó là nó! Giờ đây bạn có thể sử dụng chế độ Tự động miễn phí trong trò chơi Catizen trên Telegram.
