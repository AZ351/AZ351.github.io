$(document).ready(function(){
    function lottery(numbers) {
        let randomNumber = Math.floor(Math.random() * numbers.length);
        let winningNumber = numbers[randomNumber];
        return winningNumber;
    }
    var winner = [];
    function cj(cs) {
        var last = false
        var name = ["石希拉","藏花小妖","逍欧","小妍","小枳","豆豆","梦琪","美子酱","海棠花","琴饱"]
        if (cs == 1) {
            var name_1 = ["石希拉","石希拉","石希拉","石希拉","石希拉","藏花小妖","藏花小妖","逍欧","小妍","小枳","豆豆","梦琪","美子酱","海棠花","琴饱"]
        }
        if (cs == 2) {
            var name_1 = ["石希拉","石希拉","石希拉","石希拉","石希拉","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","逍欧","小妍","小枳","海棠花"]
        }
        if (cs == 3) {
            var name_1 = ["石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","石希拉","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","藏花小妖","逍欧","小妍","海棠花"]
            last = true
        }
        var intive = setInterval(function(){
            $("#name").text(name[Math.floor(Math.random() * name.length)]);
        }, 10)
        setTimeout(function(){
            $("#name").text(name_1[Math.floor(Math.random() * name_1.length)]);
            winner.push($("#name").text());
            console.log(winner);
            clearInterval(intive);
        },5000)
        setTimeout(function(){
            $("#name").css("display", "none");
            $("#title").css("display", "none");
            $("#give").css("display", "none");

        },10000)
        setTimeout(function(){
            if (last) {
                $("#title").css("display", "block");
                $(".md").css("display", "block");
                $("#title").text("获奖名单");
                $("#md1").children("h1").text(winner[0]+"   88星币");
                $("#md2").children("h1").text(winner[1]+"   224星币");
                $("#md3").children("h1").text(winner[2]+"   8.8元");
            }
        },11000)
    }
    $("#name").css("display", "none");
    $(".md").css("display", "none");
    $("#kz_1").click(function(){
        $("#name").css("display", "none");
        $("#title").css("display", "block");
        $("#give").css("display", "block");
        $("#title").text("第一轮幸运抽奖");
        $("#give").text("奖品：88星币");
    })
    $("#kz_2").click(function(){
        $("#name").css("display", "none");
        $("#title").css("display", "block");
        $("#give").css("display", "block");
        $("#title").text("第二轮幸运抽奖");
        $("#give").text("奖品：224星币");
    })
    $("#kz_3").click(function(){
        $("#name").css("display", "none");
        $("#title").css("display", "block");
        $("#give").css("display", "block");
        $("#title").text("第三轮幸运抽奖");
        $("#give").text("奖品：8.8元");
    })
    $("#kj_1").click(function(){
        $("#name").css("display", "block");
        $("#title").css("display", "none");
        cj(1)
    })
    $("#kj_2").click(function(){
        $("#name").css("display", "block");
        $("#title").css("display", "none");
        cj(2)
    })
    $("#kj_3").click(function(){
        $("#name").css("display", "block");
        $("#title").css("display", "none");
        cj(3)
    })
 });