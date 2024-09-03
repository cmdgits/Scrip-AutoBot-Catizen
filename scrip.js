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
        u(`AutoBot ${P.cat.isAuto ? 'đã kích hoạt' : 'đã tắt'}!\n\nĐược crack bởi @bibo318`);
    }

    // Gán hàm onClickAuto vào prototype của N thay vì M
    N.prototype.onClickAuto = onClickAuto;
    console.log(`${consolePrefix}Script đã tải`, consoleGreen);
    console.log(`${consolePrefix}Được crack bởi @bibo318`, consoleGreen);

} catch (e) {
    console.log(`${consolePrefix}Đã xảy ra lỗi, điểm dừng được đặt không đúng!`, consoleRed);
    console.log(`${consolePrefix}Vui lòng làm theo hướng dẫn, và bạn sẽ thành công :*`, consoleRed);
    console.log('https://github.com/bibo318/AutoBot-Catizen');
}
