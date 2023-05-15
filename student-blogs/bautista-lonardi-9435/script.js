import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(utc);
dayjs.extend(relativeTime);

dayjs.locale("es");
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

document.addEventListener("DOMContentLoaded", function () {
    // Usar la función humanize realizada en el ejercicio de la clase 2 para mostrar las fechas de forma humana en el HTML.
    const formatStr = "D MMMM YYYY";

    function humanize(date) {
        const newDate = dayjs(date);
        const dateNow = dayjs();
        const daysDiff = dateNow.diff(newDate, "day");

        console.log(daysDiff);

        const isCurrentYear = newDate.year() === dateNow.year();

        if (!isCurrentYear) {
            return newDate.format(formatStr);
        } else if (daysDiff >= 31) {
            return newDate.format("MMMM DD");
        } else if (daysDiff < 31) {
            return newDate.fromNow();
        }
    }

    let $timeTags = document.querySelectorAll("time");
    $timeTags.forEach((timeTag) => {
        let fecha = timeTag.getAttribute("datetime");
        let humanizeDate = humanize(fecha);
        timeTag.innerText = humanizeDate;
    });
});
