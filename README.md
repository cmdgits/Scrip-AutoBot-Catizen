<br>

<div align="center">

  <h1 align="center">AutoBot cho Catizen</h1>
  
  <p align="center">
    <strong>Scrip này mở khóa nút chế độ "Tự động" trong trò chơi mà không yêu cầu chi phí 3900 $Fish.</strong>
  </p>


</div>

##Đặc trưng
-Tự động tăng tốc
-Tự động hợp nhất mèo
-Tự động mua mèo miễn phí
-Tự động xóa mèo cấp thấp
-Tự động thu thập tiền thưởng Airdrop

## Bật Chế độ gỡ lỗi cho ứng dụng 

### Android
- **[Bật gỡ lỗi USB](https://developer.chrome.com/docs/devtools/remote-debugging/)**trên thiết bị của bạn.
- Trong Cài đặt Telegram, cuộn xuống hết cỡ, nhấn và giữ số phiên bản hai lần.
- Chọn Bật gỡ lỗi WebView trong Cài đặt gỡ lỗi.
- Kết nối điện thoại của bạn với máy tính và mở chrome://inspect/#devices trong Chrome – bạn sẽ thấy Ứng dụng nhỏ của mình ở đó khi khởi chạy ứng dụng này trên điện thoại.

### Telegram Desktop trên Windows và Linux
- Tải xuống và khởi chạy **[Phiên bản Beta](https://desktop.telegram.org/changelog#beta-version)**của Telegram Desktop trên Windows hoặc Linux (chưa được hỗ trợ trên Telegram Desktop cho macOS).
- Đi tới Cài đặt > Nâng cao > Cài đặt thử nghiệm > Bật kiểm tra chế độ xem web.
- Nhấp chuột phải vào WebView và chọn Kiểm tra.

### Telegram macOS
- Tải xuống và khởi chạy **[Phiên bản Beta](https://telegram.org/dl/macos/beta)**của Telegram macOS.
- Nhấp nhanh 5 lần vào biểu tượng Cài đặt để mở menu gỡ lỗi và bật “Gỡ lỗi ứng dụng mini”.
## Khởi chạy tập lệnh

Thực hiện theo các bước bên dưới để khởi chạy tập lệnh:

1. Mở trò chơi trong Ứng dụng web Telegram và trình kiểm tra web của trình duyệt của bạn. Bạn có thể thực hiện việc này bằng cách nhấp chuột phải vào trang và chọn **"Inspect"**hoặc **"Inspect Element"**(tùy thuộc vào trình duyệt).

2. Đi tới tab **"Sources"**trong trình kiểm tra web.

3. Tìm tệp **"bundle-*.js"**. Nó nằm trong thư mục **"tgCat/game/cat/js"**.
4. Mở tệp **"bundle-*.js"**và tìm dòng có điều kiện :
    ` t([e("leaguechange")], N.prototype, "updateBg", null),`


6. Đặt Brake Point tại đường này. Bạn có thể thực hiện việc này bằng cách nhấp vào số dòng ở bên trái của mã hoặc nhấn phím **F9**trên bàn phím.

7. Tải lại trang bằng cách nhấn **F5**trên bàn phím.

8. Chuyển sang tab **"Bảng điều khiển"**. Trong bảng điều khiển ở cuối trang, nhập tập lệnh đã sao chép và nhấn phím **Enter**.
```
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
        u(`AutoBot ${P.cat.isAuto ? 'đã kích hoạt' : 'đã tắt'}!\n\nĐược crack bởi @cmdgit`);
    }
    
    // Gán hàm onClickAuto vào prototype của N thay vì M
    N.prototype.onClickAuto = onClickAuto;
    console.log(`${consolePrefix}Script đã tải`, consoleGreen);
    console.log(`${consolePrefix}Được crack bởi @cmdgit`, consoleGreen);

} catch (e) {
    console.log(`${consolePrefix}Đã xảy ra lỗi, điểm dừng được đặt không đúng!`, consoleRed);
    console.log(`${consolePrefix}Vui lòng làm theo hướng dẫn, và bạn sẽ thành công :*`, consoleRed);
    console.log('https://github.com/cmdgit/AutoBot-Catizen');
}
```
8. Để tắt trình gỡ lỗi, hãy quay lại tab **"Sources"**và nhấp vào Brake Point để xóa nó. Bạn cũng có thể nhấn lại phím **F9**để xóa Brake Point.

### Đó là nó! Giờ đây bạn có thể sử dụng chế độ Tự động miễn phí trong trò chơi Catizen trên Telegram.

## Tác giả
cmdgit


####################English####################
###English

<br>

<div align="center">

[<img src="./resources/catizen-logo.jpg" width="144"/>](https://t.me/catizenbot)

  <h1 align="center">AutoBot for Catizen</h1>
  
  <p align="center">
    <strong>This script unlocks the "Auto" mode button in the game without requiring the cost of 3900 $Fish.</strong>
  </p>
  <img src="./resources/demo.png"/>

</div>

## Features
- Auto accelerate
- Auto merge cats
- Auto buy free cats
- Auto delete low-level cats
- Auto collect Airdrop rewards

## Enable Debug Mode for the Application

### Android
- **[Enable USB debugging](https://developer.chrome.com/docs/devtools/remote-debugging/)** on your device.
- In Telegram Settings, scroll all the way down, and tap and hold the version number twice.
- Select Enable WebView debugging in Debug Settings.
- Connect your phone to your computer and open chrome://inspect/#devices in Chrome – you will see My Little App there when you launch the app on your phone.

### Telegram Desktop on Windows and Linux
- Download and launch the **[Beta version](https://desktop.telegram.org/changelog#beta-version)** of Telegram Desktop on Windows or Linux (not supported on Telegram Desktop for macOS).
- Go to Settings > Advanced > Experimental settings > Enable web view inspection.
- Right-click on WebView and select Inspect.

### Telegram macOS
- Download and launch the **[Beta version](https://telegram.org/dl/macos/beta)** of Telegram macOS.
- Quickly click 5 times on the Settings icon to open the debug menu and enable “Debug Mini Apps”.

## Launch the Script

Follow the steps below to launch the script:

1. Open the game in the Telegram web app and your browser's web inspector. You can do this by right-clicking on the page and selecting **"Inspect"** or **"Inspect Element"** (depending on the browser).

2. Go to the **"Sources"** tab in the web inspector.

3. Find the **"bundle-*.js"** file. It is located in the **"tgCat/game/cat/js"** directory.
4. Open the **"bundle-*.js"** file and find the line with the condition ```t([e("leaguechange")], N.prototype, "updateBg", null),```.

5. Set a Breakpoint at this line. You can do this by clicking on the line number to the left of the code or by pressing **F9** on your keyboard.

6. Reload the page by pressing **F5** on your keyboard.

7. Switch to the **"Console"** tab. In the console at the bottom of the page, paste the copied script and press **Enter**.

```
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
        u(`AutoBot ${P.cat.isAuto ? 'đã kích hoạt' : 'đã tắt'}!\n\nĐược crack bởi @cmdgits`);
    }
    
    // Gán hàm onClickAuto vào prototype của N thay vì M
    N.prototype.onClickAuto = onClickAuto;
    console.log(`${consolePrefix}Script đã tải`, consoleGreen);
    console.log(`${consolePrefix}Được crack bởi @cmdgits`, consoleGreen);

} catch (e) {
    console.log(`${consolePrefix}Đã xảy ra lỗi, điểm dừng được đặt không đúng!`, consoleRed);
    console.log(`${consolePrefix}Vui lòng làm theo hướng dẫn, và bạn sẽ thành công :*`, consoleRed);
    console.log('https://github.com/cmdgits/AutoBot-Catizen');
}
```

8. To disable the debugger, go back to the **"Sources"** tab and click on the Breakpoint to remove it. You can also press **F9** again to remove the Breakpoint.

### That's it! You can now use the Auto mode for free in the Catizen game on Telegram.








