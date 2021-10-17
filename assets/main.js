const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playing = $('.footer')
const audio = $('#audio')
const header = $('.body_header')
const body = $('.body')
const sliderBlock = $('.tongquan_body-slider')
const titleNameSong = $('.media_title-nameSong')
const titleSinger = $('.media_title-singer')
const cd = $('.media_cd')
const playBtn = $('.control_icon-item-playandPause')
const progress = $('#progress')
const backBtn = $('.control_icon-item-back')
const nextBtn = $('.control_icon-item-next')
const randomBtn = $('.control_icon-item-random')
const nodeDuration = $('.controls_input-totalTime')
const nodeCurentTime = $('.controls_input-currentTime')
const repeatBtn = $('.control_icon-item-repeat')
const volumeInput = $('.volumeInput')
const volUpBtn = $('.extend_icon-vol-up')
const volDowBtn = $('.extend_icon-vol-dow')
const volMuteBtn = $('.extend_icon-vol-mute')
const heart = $('.heart')
const navItem = $$('.nav_option-item')
const songListBlock = $$('.tongquan_body-listSong')[0]
const gif = $('.media_title-gif-item')




var app = {
    // currenIndexSlider
    currentIndex: 0,
    currentVol:1,
    checkPlay: false,
    isRepeat: false,
    isRandom: false,
    arrSongRandom: [],
    isHeart: false,
    isHeartSong:false,
    isSetting: false,
    slider:[
        {
            name: 'roitoiluon',
            position: 'first',
            img_link: './assets/img/roitoiluon.jpg'
        },
        {
            name: 'muonroimasaocon',
            position: 'second',
            img_link: './assets/img/muonroimasaocon.jpg'
        },
        {
            name: 'nangtho',
            position: 'third',
            img_link: './assets/img/nangtho.jpg'
        },
        
    
    ],
    songs: [
        {
            name: 'Rồi tới luôn',
            singer: 'NAL',
            path: './assets/song/Roi Toi Luon-Nal.mp3',
            image: './assets/img/roitoiluon.jpg',
            time: '04:06'

        },
        {
            name: '1 phút',
            singer: 'Andiez',
            path: './assets/song/1 Phut - Andiez (NhacPro.net).mp3',
            image: './assets/img/1phut-Andiez.jpg',
            time: '06:16'

        },
        {
            name: 'Em là con thuyền cô đơn',
            singer: 'Thái Học',
            path: './assets/song/EmLaConThuyenCoDon-ThaiHoc-7099598.mp3',
            image: './assets/img/emlaconthuyenkhongben.jpg',
            time: '05:05'

        },
        {
            name: 'Hoa vô sắc',
            singer: 'Jack',
            path: './assets/song/HoaVoSac-KICMJackG5R-6181476.mp3',
            image: './assets/img/hoavosac.jpg',
            time: '04:40'


        },
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng MVP',
            path: './assets/song/Muon Roi Ma Sao Con - Son Tung M-TP.mp3',
            image: './assets/img/sontung.jpg',
            time: '04:35'

        },
        {
            name: 'Nàng thơ',
            singer: 'Hoàng Dũng',
            path: './assets/song/NangTho-HoangDung-6413381.mp3',
            image: './assets/img/nangtho.jpg',
            time: '01:14'

        },
        {
            name: 'Ngày chưa giông bão',
            singer: 'Bùi Lan Hương',
            path: './assets/song/NgayChuaGiongBaoNguoiBatTuOst-BuiLanHuong-5708274.mp3',
            image: './assets/img/ngaychuagiongbao.jpg',
            time: '03:32'

        },
        {
            name: 'Người lạ thoáng qua',
            singer: 'Đinh Tùng Huy',
            path: './assets/song/Nguoi La Thoang Qua - Dinh Tung Huy_ ACV.mp3',
            image: './assets/img/nguoilathoangqua-dinhtunghuy.jpg',
            time: '04:45'

        },
        {
            name: 'Níu duyên',
            singer: 'Lê Bảo Bình',
            path: './assets/song/NiuDuyen-LeBaoBinh-6872127.mp3',
            image: './assets/img/nuiduyen.jpg',
            time: '05:35'

        },
        {
            name: 'Phận duyên lỡ làng',
            singer: 'PhatHuyT4Trugz',
            path: './assets/song/PhanDuyenLoLang-PhatHuyT4Trugz-7004538.mp3',
            image: './assets/img/phanduyenlolang.jpg',
            time: '04:15'

        },
        {
            name: 'Sóng gió',
            singer: 'Jack',
            path: './assets/song/SongGioDJXuanNuiRemix-DJXuanNuiKICMJackG5R-6035315.mp3',
            image: './assets/img/songgio.jpg',
            time: '03:15'

        },
        {
            name: 'Thê lương',
            singer: 'Phúc Chinh',
            path: './assets/song/TheLuong-PhucChinh-6971140.mp3',
            image: './assets/img/theluong-phucchinh.jpg',
            time: '05:13'

        },
        {
            name: 'Tình thương phu thê',
            singer: 'Chí Hướng',
            path: './assets/song/TinhThuongPhuThe-ChiHuong-7024958.mp3',
            image: './assets/img/tinhthuongphuthue.jpg',
            time: '04:34'

        },
        {
            name: 'Em gái mưa',
            singer: 'Gin Tuấn Kiệt',
            path: './assets/song/EmGaiMuaCover-GinTuanKiet-5184453.mp3',
            image: './assets/img/emgaimua-gin.jpg',
            time: '02:46'

        },
    ],
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },


     //render songlist-----------------------------------------------------
     renderSongList: function(){
        const htmlSongList = this.songs.map((song, index)=>{
            return `
            <div class="tongquan_body-listSong-item ${index === this.currentIndex ? 'active' : ''}" data-index = ${index}>
                <div class="tongquan_body-listSong-item-iconPlay">
                    <i class="fas fa-play"></i>
                </div>
                               
                <div class="listSong_item-body">
                    <div class="listSong_item-body-avatar">
                        <img src="${song.image}" alt="">
                        <span class="listSong_item-body-avatar-gif">
                            <img src="https://i.gifer.com/Z23b.gif" alt="">
                        </span>
                    </div>
                    
                    <div class="listSong_item-body-wrap">
                        <div class="listSong_item-body-name">${song.name}</div>
                        <div class="listSong_item-body-singer">${song.singer}</div>
                    </div>
                </div>

                <div class="listSong_item-timeSong">${song.time}</div>

                <div class="listSong_item-option">
                    <span class="listSong_item-option-icon hideOn-mb-tl listSong_item-option-icon-mv"><i class="fab fa-youtube"></i></span>
                    <span class="listSong_item-option-icon hideOn-mb-tl listSong_item-option-icon-lyric"><i class="fas fa-microphone-alt"></i> </span>
                    <span class = "listSong_item-option-icon heart-song">
                        <span class="listSong_item-option-icon-heart"><i class="fas fa-heart"></i></span>
                        <span class="listSong_item-option-icon-heart--empty"><i class="far fa-heart"></i></span>
                    </span>
                    <span class="listSong_item-option-icon listSong_item-option-icon-more"><i class="fas fa-ellipsis-h"></i></span>
                </div>
            </div>
            `
        })
        
            songListBlock.innerHTML = htmlSongList.join('')
       
        
    },


    //handle event-------------------------------------------------------
    handleEvent: function(){
        const _this = this

        

        // handle heart click
        heart.onclick = function(){
            if(_this.isHeart){
                heart.classList.remove('active')
                _this.isHeart = false
            }else{
                _this.isHeart = true
                heart.classList.add('active')
            }
        }

      
        
        // scroll - add background for header
        body.onscroll= function(){
            if(body.scrollTop > 0 ){
                header.classList.add('background')
            }else if(body.scrollTop === 0){
                header.classList.remove('background')
            }
        }
        // xử lí khi play
        playBtn.onclick = function(){
            if(_this.checkPlay == false){
                audio.play()
            }else{
                audio.pause()
            }
            _this.scrollSongToView()


        }
        //khi song play
        audio.onplay = function(){

            playing.classList.add('playing')
            songListBlock.classList.add('playing')
            gif.classList.add('active')
            setTimeout(() => {
                gif.style.display = 'block'
            }, 1000);
            _this.checkPlay = true
            
             cdAnimate.play()
             gifAnimate.play()
        _this.scrollSongToView()

            


        }

        //khi song pause 
        audio.onpause = function(){
            playing.classList.remove('playing')
            songListBlock.classList.remove('playing')
            gif.classList.remove('active')
            setTimeout(() => {
                gif.style.display = 'none'
            }, 1500);

            _this.checkPlay = false
            
             cdAnimate.pause()
             gifAnimate.pause()
            
        }


        //khi tiến độ bài hát thay đổi 
        audio.ontimeupdate = function(){
            //thì progress cũng thay đổi theo
            if(audio.duration){
                progress.value =( audio.currentTime  / audio.duration * 100)
            }
            //và thời gian hiện tại cũng thay đổi
            let TimeCurrent  = Math.floor(audio.currentTime)
            let aa = Math.floor(TimeCurrent/60)
            let bb
            let ee = TimeCurrent%60
            if(ee <10){
                cc = 0
            }else{
                cc =''
            }
            if(aa < 10){
                bb = 00

            }else{
                bb = ''

            }
            

            nodeCurentTime.innerHTML = `${bb}${aa}:${cc}${ee}`

            // active gif musick
            

        }
      
        // tua song
        progress.oninput = function(e){

            const seekTime =  audio.duration / 100 * e.target.value
            progress.onmouseup = function(){
                audio.currentTime = seekTime
                
            }
        }
        
        //khi phát hiện tiến độ bài hát thay đổi
        audio.ondurationchange = function(){
           

            //thay đổi tổng thời lượng bài hát
                let totalTime = audio.duration
                let minute = Math.floor(totalTime/60)
                let seconds = Math.floor(totalTime%60)
                let a = ''
                if(minute < 10){
                    a = 0
                }
                let b = ''
                if(seconds < 10 ){
                    b = 0
                }
                nodeDuration.innerHTML = `${a}${minute}:${b}${seconds}`


           

               

        
        
        }
        
        
        // xử lí cd quay / dừng
        const cdAnimate = cd.animate ([
            {transform : 'rotate(360deg)'}
        ],{
            duration: 8000,
            iterations: Infinity
        }
        )
        cdAnimate.pause()

        //gif run
        const gif = $('.media_title-gif-item')
        const gifAnimate = gif.animate([
            //key farms
            {left: '100%'}
        ],{
            duration: 50000,
            iterations: Infinity
        })
        gifAnimate.pause()

        //when next and back song
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.randomSong()
            }else{
                 _this.nextSong()
                audio.play()
            }
            _this.renderSongList()
            _this.scrollSongToView()


            
            
           
        }
        backBtn.onclick= function(){
            if (_this.isRandom){
                _this.randomSong()
            }else{
                _this.backSong()
                audio.play()

            }
            _this.renderSongList()
            _this.scrollSongToView()
                  

        }

        // handle random song
        randomBtn.onclick = function(){
            if(_this.isRandom){
                randomBtn.classList.remove('active')
                _this.isRandom = false
            }else{
                randomBtn.classList.add('active')
                _this.isRandom =true
            }
        }

        
        

        //handle repeat song
        repeatBtn.onclick = function(){
            if(_this.isRepeat){
                _this.isRepeat = false
                repeatBtn.classList.remove('active')
            }else{
                _this.isRepeat =true
                repeatBtn.classList.add('active')
            }
        }
        

        //handle when end song
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{
                nextBtn.click()
            }
        }


        //handle when change volumeInput
        
        let totalVol = audio.volume

        volumeInput.oninput = function(){
            _this.currentVol  = totalVol / 100 * volumeInput.value
            audio.volume = _this.currentVol


            //handle vol btn
          
            if(_this.currentVol <= 1 && _this.currentVol >= 0.5){
                volDowBtn.classList.remove('active')
                volUpBtn.classList.add('active')
                volMuteBtn.classList.remove('active')
            }
            if(_this.currentVol < 0.5 && _this.currentVol > 0){
                volDowBtn.classList.add('active')
                volUpBtn.classList.remove('active')
                volMuteBtn.classList.remove('active')
            }
             if(_this.currentVol == 0){
                volDowBtn.classList.remove('active')
                volUpBtn.classList.remove('active')
                volMuteBtn.classList.add('active')
            }
            

            
            
        }
        // when click volBtn
        volUpBtn.onclick = function(){
            volDowBtn.classList.remove('active')
            volUpBtn.classList.remove('active')
            volMuteBtn.classList.add('active')
            

            audio.volume = 0
        }


        volDowBtn.onclick =function(){
            volDowBtn.classList.remove('active')
            volUpBtn.classList.remove('active')
            volMuteBtn.classList.add('active')

            audio.volume = 0
        }

        
        volMuteBtn.onclick = function(){
            

            if(_this.currentVol <= 1 && _this.currentVol >= 0.5){
                volDowBtn.classList.remove('active')
                volUpBtn.classList.add('active')
                volMuteBtn.classList.remove('active')
                audio.volume = _this.currentVol
            }
            if(_this.currentVol < 0.5 && _this.currentVol > 0){
                volDowBtn.classList.add('active')
                volUpBtn.classList.remove('active')
                volMuteBtn.classList.remove('active')
                audio.volume = _this.currentVol

            }
            if(_this.currentVol === 0){
                
                volDowBtn.classList.remove('active')
                volUpBtn.classList.add('active')
                volMuteBtn.classList.remove('active')
                _this.currentVol = 1
                volumeInput.value = 100
                audio.volume = _this.currentVol


            }
           
        }
        

       
        //when click nodeSong
        
        const playList = $('.tongquan_body-listSong')
        playList.onclick = function(e){
            const songNode = e.target.closest('.tongquan_body-listSong-item:not(.active)')
            if( (!e.target.closest('.listSong_item-option-icon-more')) && (!e.target.closest('.heart-song'))){
                if(songNode){
                    _this.currentIndex = Number(songNode.getAttribute('data-index')) // vì getAtribute trả về chuỗi nên phải chuyển sang number
                    _this.loadCurrentSong()
                    audio.play()
                    _this.renderSongList()

                }
            }
            
        }

        //when hover navItem
        navItem.forEach((item , index) => {
            item.onclick = function(){
                console.log(45678);
                $('.active.nav_option-item').classList.remove('active')
                item.classList.add('active')
                
            }
        });

        //when forcus in input navbar
        $('.header_search input').onfocus = function(){
            $('.header_search').style.background = '#6e26a7'
            $('.header_search').style.borderRadius = '20px 20px 0 0 '

        }
        $('.header_search input').onblur = function(){
            $('.header_search').style.background = 'rgba(100, 50, 182, 0.2)'
            $('.header_search').style.borderRadius = '20px'

        }

        //when click tab body
        const tabListContent = $$('.body_tab-content-tongquan')

        const tabListItems = $$('.body_tab-list-item')
        tabListItems.forEach((tab, index) => {
            tab.onclick=function(){
                console.log(tab);
               $('.body_tab-list-item.active').classList.remove('active')
                tab.classList.add('active')
                
               
                if(index == 0){
                    $('.body_tab-content-tongquan.active').classList.remove('active', 'playlist', 'songList')
                    tabListContent[0].classList.add('active')
                }
                else if(index == 1){
                    $('.body_tab-content-tongquan.active').classList.remove('active', 'playlist', 'songList')
                     tabListContent[0].classList.add('active','songList')
                }else if(index == 2){
                    $('.body_tab-content-tongquan.active').classList.remove('active', 'playlist', 'songList')
                    tabListContent[0].classList.add('active','playlist')
                }else{
                    $('.body_tab-content-tongquan.active').classList.remove('active', 'playlist', 'songList')
                    tabListContent[index].classList.add('active')
                }

                
            }
        });

        //when click setting
        const settingBtn = $('.js-setting')
        const settingOption = $('.header_option-item-menuSetting')
        settingBtn.onclick=function(e){
            if(_this.isSetting){
                settingOption.classList.remove('active')
                _this.isSetting = false
            }else{
                settingOption.classList.add('active')
                _this.isSetting = true
            }
           
            

        }
        settingOption.onclick = function(e){
            e.stopPropagation()
        }
        
        

        


        

       


    },

    //render slider
    renderSlider: function(){
        const htmlSlider = this.slider.map(function(img, index){
            return `
            <img   class="tongquan_body-slider-img ${img.position}" src="${img.img_link}" alt="">
            `

        })
        sliderBlock.innerHTML = htmlSlider.join('')
        var a = $('.tongquan_body-slider-img.first')
        var b = $('.tongquan_body-slider-img.second')
        var c = $('.tongquan_body-slider-img.third')
        setTimeout(()=>{
            
            a.classList.remove('first')
            a.classList.add('third')
            b.classList.remove('second')
            b.classList.add('first')
            c.classList.remove('third')
            c.classList.add('second')
        },1000)
        setTimeout(()=>{
            a.classList.remove('third')
            a.classList.add('second')
            b.classList.remove('first')
            b.classList.add('third')
            c.classList.remove('second')
            c.classList.add('first')
        },4000)
        setTimeout(()=>{
            a.classList.remove('second')
            a.classList.add('first')
            b.classList.remove('third')
            b.classList.add('second')
            c.classList.remove('first')
            c.classList.add('third')
        },7000)
        setInterval(()=>{
            

            setTimeout(()=>{
                a.classList.remove('first')
                a.classList.add('third')
                b.classList.remove('second')
                b.classList.add('first')
                c.classList.remove('third')
                c.classList.add('second')
            },0)
            setTimeout(()=>{
                a.classList.remove('third')
                a.classList.add('second')
                b.classList.remove('first')
                b.classList.add('third')
                c.classList.remove('second')
                c.classList.add('first')
            },3000)
            setTimeout(()=>{
                a.classList.remove('second')
                a.classList.add('first')
                b.classList.remove('third')
                b.classList.add('second')
                c.classList.remove('first')
                c.classList.add('third')
            },6000)

           
        },10000)
    },
    

   
    
    loadCurrentSong: function(){
        titleNameSong.textContent = this.currentSong.name
        cd.style.backgroundImage = `url('${this.currentSong.image}')`
        titleSinger.textContent = this.currentSong.singer
        audio.src = this.currentSong.path

    },

    



    nextSong: function(){
        

        this.currentIndex++
        if(this.currentIndex == this.songs.length){
            this.currentIndex = 0
        }
        
        this.loadCurrentSong()
    },


    backSong: function(){
        
        this.currentIndex--
        if(this.currentIndex < 0 ){
            this.currentIndex = this.songs.length-1
        }
        this.loadCurrentSong()
    },
   

    randomSong: function(){
        
        this.arrSongRandom.push(this.currentIndex)
        if(this.arrSongRandom.length === this.songs.length){
            this.arrSongRandom =  [];
        }

        let newCurrentIndex
        do {
             newCurrentIndex =  Math.floor(Math.random() * this.songs.length)
           
        } while (this.arrSongRandom.includes( newCurrentIndex));
        this.currentIndex = newCurrentIndex
        this.loadCurrentSong()
    },

    // scrollToView------------------------------
    scrollSongToView: function(){
        setTimeout(() => {
         $('.tongquan_body-listSong-item.active').scrollIntoView({
             behavior : 'smooth',
             block :'center'
 
         });
        }, 400);
     },

    
    //start---------------------------------------------
    start: function(){
        //định nghĩa các thuộc tính cho object
        this.defineProperties()

        this.renderSlider()

        //tải thông tin bài hát đầu tiên khi mở ứng dụng
        this.loadCurrentSong()
        this.handleEvent()
        this.renderSongList()
        

    },
    
}
app.start()
// app.durationTime()



