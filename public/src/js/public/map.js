ymaps.ready(init);

function init() {
    // Создание карты.
    // центрирование и задание зума  а так же настройка контроллеров
    var map = new ymaps.Map("map", {
        center:[47.210950574276836,39.68735350000001],
        zoom: 14,
        controls: [],
        innerHeight:700,
        outerHeight:700
    }, {
        suppressMapOpenBlock: true
    });
    map.behaviors.disable('scrollZoom');
    // установка маркера на карте и его катомизация
    var myPlacemark = new ymaps.Placemark(
        [47.210950574276836,39.68735350000001],
        {},
    );
   
    map.geoObjects.add(myPlacemark);
}
