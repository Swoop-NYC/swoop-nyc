const cookieController = {}

cookieController.setCookie = (req, res, next) => {
    res.cookie('test Cookie', 'test Value');
    next();
};

cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie('ssid', )
}