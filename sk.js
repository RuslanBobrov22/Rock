document.querySelector('#beat').onclick = function() {
    document.querySelector('#field').innerHTML = 'BEATLES';
    document.querySelector('#disc').innerHTML = 'Битлз также группу называют «Ливерпульской четвёркой» (Liverpool Four), отдельно участников ансамбля называют «битлами»; в английском языке также распространено упоминание группы как Fab Four — «Великолепная четвёрка») — британская рок-группа из Ливерпуля, основанная в 1960 году, в составе которой играли Джон Леннон, Пол Маккартни, Джордж Харрисон и Ринго Старр.';
}

document.querySelector('#pin').onclick = function() {
    document.querySelector('#field').innerHTML = 'PINK FLOYD';
    document.querySelector('#disc').innerHTML = 'британская рок-группа, знаменитая своими продолжительными композициями и объединёнными в тематические сюиты песнями, звуковыми экспериментами, философскими текстами, дизайном обложек альбомов и грандиозными концертными шоу';
}

document.querySelector('#nir').onclick = function() {
    document.querySelector('#field').innerHTML = 'NIRVANA';
    document.querySelector('#disc').innerHTML = 'Американская рок-группа, созданная вокалистом и гитаристом Куртом Кобейном и басистом Кристом Новоселичем в Абердине, штат Вашингтон, в 1987 году. В составе коллектива сменились несколько барабанщиков; дольше всех с группой играл ударник Дэйв Грол, присоединившийся к Кобейну и Новоселичу в 1990 году В 1989 году Nirvana стала частью сиэтлской музыкальной сцены, выпустив на независимом лейбле Sub Pop дебютный альбом Bleach. После подписания контракта с крупным лейблом DGC Records Nirvana приобрела неожиданный успех с песней «Smells Like Teen Spirit».';
}

document.querySelector('#que').onclick = function() {
    document.querySelector('#field').innerHTML = 'QUEEN';
    document.querySelector('#disc').innerHTML = 'Британская рок-группа, добившаяся широчайшей известности в середине 1970-х годов, и одна из наиболее успешных групп в истории рок-музыки. Средства массовой информации называют группу «культовой» и пишут, что она и по сей день имеет сотни миллионов поклонников';
}

document.querySelector('#met').onclick = function() {
    document.querySelector('#field').innerHTML = 'METALLICA';
    document.querySelector('#disc').innerHTML = 'Американская метал-группа, созданная вокалистом и гитаристом Джеймсом Хэтфилдом и барабанщиком Ларсом Ульрихом в Лос-Анджелесе, штат Калифорния, в 1981 году. Одна из наиболее популярных и влиятельных команд в истории хард-рока, Metallica входит в так называемую «большую четвёрку» основоположников и ключевых коллективов жанра трэш-метал, оказавших определяющее влияние на его развитие, и считается, что творчество этих коллективов положило начало развитию данного направления в музыке. ';
}


document.querySelector('#ram').onclick = function() {
    document.querySelector('#field').innerHTML = 'RAMMSTEIN';
    document.querySelector('#disc').innerHTML = 'Немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала. Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен';
}


let list = document.querySelectorAll('.list li a');
list.forEach(link => {
    let letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach((letter, i) => {
        i += 1;
        let span = document.createElement('span');
        let delay = i/15;
        let letterOut = document.createElement("span");
        letterOut.textContent = letter;
        letterOut.style.transitionDelay = `${delay}s`;
        letterOut.classList.add('out');
        span.append(letterOut);

        let letterin = document.createElement("span");
        letterin.textContent = letter;
        letterin.style.transitionDelay = `${delay}s`;
        letterin.classList.add('in');
        span.append(letterin);
        
        link.append(span);
    })
})