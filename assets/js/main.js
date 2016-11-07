'use strict';
angular.module('myApp',
    [
        "ngSanitize",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.poster",
        "com.2fdevs.videogular.plugins.buffering"
    ]
)
    .controller('HomeCtrl',
        ["$sce", function ($sce) {
            var controller = this;
            controller.API = null;

            controller.onPlayerReady = function(API) {
                controller.API = API;
            };

            controller.videos = [
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
                        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
                    ]
                },
                {
                    sources: [
                        {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
                        {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
                    ]
                }
            ];

            controller.config = {
                preload: "none",
                autoHide: false,
                autoHideTime: 3000,
                autoPlay: false,
                sources: controller.videos[0].sources,
                theme: {
                    url: "node_modules/videogular-themes-default/videogular.css"
                },
                plugins: {
                    poster: "assets/videos/1/videogular.png"
                }
            };

            controller.setVideo = function(index) {
                controller.API.stop();
                controller.config.sources = controller.videos[index].sources;
            };
        }]
    );