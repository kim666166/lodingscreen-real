/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "Yqtoz4Sw_40", name: "Jamie N Commons - Karma"},
	{youtube: "182TRJq9Zt8", name: "Sam Smith - Leave Your Lover"},
	{youtube: "BiQIc7fG9pA", name: "gnash - i hate u, i love u (ft. olivia o'brien)"},
	{youtube: "48VSP-atSeI", name: "Maroon 5 - Sugar"},
	{youtube: "GFQYaoiIFh8", name: "Demons - Imagine Dragons"},
	{youtube: "VdHAgXsiqR4", name: "DIA 다이아 - 그 길에서 (On the road)"},
	{youtube: "Yim4--J44gk", name: "OneRepublic - Counting Stars"},
	{youtube: "2B50RUXbs-8", name: "Rihanna - Love The Way You Lie (Part 2)"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 100;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"장난으로 하는것이 아닙니다. 진지해지세요.",
"따뜻한 마음의 부대원이 당신을 반겨줄것입니다!",
"아직 로딩화면 제작중입니다.",
"12세이하는 출입금지!",
"이것이 우리부대의 자랑거리인 로딩화면입니다ㅎ",
"만든사람이 누구냐고요? 저에요 저!!",
"여러분이 생각하시는 엄격한 부대가 아닙니다. 제가 좀 병ㅅ..퍽 같아서죠.",
"신병분이나 타부대원들께서는 들어와서 가만히좀 계세요.. 부대원들이 힘들어한답니다..",
"이거 만드느라 힘들어 죽는줄 알았습니다.",
"음 규칙이요? 차량 마음대로 소환ㄴㄴ",
"키야.. 노래좋죠?",
"로딩시간이 기니깐 할 말들 생각해보세요 면접을 보거든요ㅎㅎ",
"서버에 들어오면 부대원에 지시에 따라 움직여주세요!!",
"로딩화면 만드는법은 안알려줄꺼에요ㅋㅋ",
"노래들좀 추천해주세요!!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;