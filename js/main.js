var blockInputGroup = document.getElementById("inputBlock");
        var inputValue = document.getElementById("inputId");
        var w = window.innerWidth;
        var rocket = document.getElementById("rocketId");
        var animation = document.getElementById("animationId");
        var rocketCountdown = document.getElementById("countdownRocket");
        function FloatLabel(x) {
            blockInputGroup.classList.add("focused")
        }
        function RemoveFocus(x){
           if(inputValue.value == ""){
                blockInputGroup.classList.remove("focused")
           }
        }
        function ShowCountdown(){
            if(w <= 800 ){
                console.log(true)
                setTimeout(function() {
                    rocket.classList.add("none");            
                }, 4000);
                setTimeout(function() {
                    rocket.style.opacity = 0;  
                    animation.classList.add("opacity-down");            
                
                }, 4800);
                setTimeout(function() {
                    animation.style.display = "none";      
                    rocketCountdown.classList.add("flex");
                    rocketCountdown.classList.remove("second");

                }, 5200);
            }
            else{
                rocketCountdown.style.display = "none";

                console.log(false);
            }
        }
        function ShowCountdown2(){
            if(w <= 400){
                setTimeout(function() {
                    rocketCountdown.classList.add("grid");
                    rocketCountdown.classList.remove("second");
                    rocketCountdown.classList.remove("flex");
    
                }, 5210);
            }
        }
        ShowCountdown2();
        ShowCountdown();

        function sendEmail(){
   
        }


        var hours, minutes, seconds;
    
        const x =this;

        setInterval(function() {
            var eventDate = moment('2022-07-24 14:00:00'),
            actualDate = moment(new Date(), 'YYYY-MM-DD hh:mm:ss');

            var start = moment.utc(actualDate, "HH:mm");
            var end = moment.utc(eventDate, "HH:mm");

            if (end.isBefore(start)){
                end.add(1, 'day');
            }
            var d = moment.duration(end.diff(start));

            d.subtract(60, 'minutes');

            hours = moment.utc(+d).local().format('H');
            minutes = moment.utc(+d).format('mm');
            seconds = moment.utc(+d).format('ss');

            var h = parseInt(hours);
            
            var day = eventDate.diff(actualDate, 'days');

            if(day === 1){
                document.getElementById("daySpan").textContent = "DEN";
                document.getElementById("daySpanRocket").textContent = "DEN";

            }
            else if(day <= 4 && day != 0){
                document.getElementById("daySpan").textContent = "DEN";
                document.getElementById("daySpanRocket").textContent = "DEN";

            }
            else{
                document.getElementById("daySpan").textContent = "DNÍ";
                document.getElementById("daySpanRocket").textContent = "DNÍ";

            }
            
            if(h === 1){
                document.getElementById("hourSpan").textContent = "HODINA";
                document.getElementById("hourSpanRocket").textContent = "HODINA";                
            }
        
            else if(h <= 4 && h != 0){
                document.getElementById("hourSpan").textContent = "HODINY";
                document.getElementById("hourSpanRocket").textContent = "HODINY";
            }
            else if(h == 0){
                document.getElementById("hourSpan").textContent = "HODINA";
                document.getElementById("hourSpanRocket").textContent = "HODINA";
            }
            else{
                document.getElementById("hourSpan").textContent = "HODIN";
                document.getElementById("hourSpanRocket").textContent = "HODIN";
            }

            if(minutes === 1){
                document.getElementById("minuteSpan").textContent ="MINUTA";
                document.getElementById("minuteSpanRocket").textContent = "MINUTA";
            }
            else if(minutes <= 4 && minutes != 0){
                document.getElementById("minuteSpan").textContent = "MINUTY";
                document.getElementById("minuteSpanRocket").textContent = "MINUTY";
            }
            else if(minutes == 0){
                document.getElementById("minuteSpan").textContent = "MINUT";
                document.getElementById("minuteSpanRocket").textContent = "MINUT";
            }
            else{
                document.getElementById("minuteSpan").textContent = "MINUT";
                document.getElementById("minuteSpanRocket").textContent = "MINUT";

            }

            if(seconds == 1){
                document.getElementById("secondSpan").textContent ="SEKUNDA";
                document.getElementById("secondSpanRocket").textContent = "SEKUNDA";

            }
            else if(seconds <= 4 && seconds != 0){
                document.getElementById("secondSpan").textContent = "SEKUNDY";
                document.getElementById("secondSpanRocket").textContent = "SEKUNDY";

            }
            else if(seconds == 0){
                document.getElementById("secondSpan").textContent = "SEKUND";
                document.getElementById("secondSpanRocket").textContent = "SEKUND";


            }
            else{
                document.getElementById("secondSpan").textContent = "SEKUND";
                document.getElementById("secondSpanRocket").textContent = "SEKUND";

            }


            if(eventDate <= actualDate)
            {
                day === "0";
                h === "0";
                minutes === "00";
                seconds === "00";

                document.getElementById("dayNumber").textContent = day;
                document.getElementById("hourNumber").textContent = h;
                document.getElementById("minuteNumber").textContent = minutes;
                document.getElementById("secondNumber").textContent= seconds; 

                document.getElementById("dayNumberRocket").textContent = day;
                document.getElementById("hourNumberRocket").textContent = h;
                document.getElementById("minuteNumberRocket").textContent = minutes;
                document.getElementById("secondNumberRocket").textContent= seconds;
            }
            else{
              
                document.getElementById("dayNumber").textContent = day;
                document.getElementById("hourNumber").textContent = h;
                document.getElementById("minuteNumber").textContent = minutes;
                document.getElementById("secondNumber").textContent= seconds; 

                document.getElementById("dayNumberRocket").textContent = day;
                document.getElementById("hourNumberRocket").textContent = h;
                document.getElementById("minuteNumberRocket").textContent = minutes;
                document.getElementById("secondNumberRocket").textContent= seconds; 

            }
        }, 1000);
