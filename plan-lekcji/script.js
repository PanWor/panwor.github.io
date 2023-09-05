document.addEventListener("DOMContentLoaded", function () {
    const classSelect = document.getElementById("class-select");
    const daySelect = document.getElementById("day-select");
    const label3 = document.getElementById("label3");
    const lessonTable = document.getElementById("lesson-table").getElementsByTagName('tbody')[0];

    const classes = ["Klasa1", "Klasa2", "Klasa3", "Klasa4"]; // Dodaj nazwy klas
    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

    // Inicjalizacja ComboBox1 (klasy)
    classes.forEach(className => {
        const option = document.createElement("option");
        option.value = className;
        option.textContent = className;
        classSelect.appendChild(option);
    });

    // Inicjalizacja ComboBox2 (dzień)
    days.forEach(day => {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    });

    classSelect.addEventListener("change", updateLabel3);
    daySelect.addEventListener("change", updateLabel3);
    classSelect.addEventListener("change", updateTableInListBox);
    daySelect.addEventListener("change", updateTableInListBox);

    function updateLabel3() {
        const selectedClass = classSelect.value;
        const selectedDay = daySelect.value;
        const label3Text = `${selectedClass} - ${getTeacher(selectedClass)} - ${selectedDay}`;
        label3.textContent = label3Text;
    }

    function updateTableInListBox() {
        const selectedClass = classSelect.value;
        const selectedDay = daySelect.value;
        const tableData = getTableData(selectedClass, selectedDay);

        while (lessonTable.firstChild) {
            lessonTable.removeChild(lessonTable.firstChild);
        }

        tableData.forEach(rowData => {
            const row = lessonTable.insertRow(-1);
            rowData.forEach(cellData => {
                const cell = row.insertCell();
                cell.textContent = cellData;
            });
        });
    }

    // Funkcja do pobierania nauczyciela na podstawie klasy
    function getTeacher(className) {
        // Tu możesz dodać kod do uzyskania nauczyciela na podstawie klasy
        return "Nauczyciel " + className;
    }

    // Funkcja do pobierania danych z tabeli na podstawie klasy i dnia
    function getTableData(className, day) {
        // Tu możesz dodać kod do uzyskania danych z tabeli na podstawie klasy i dnia
        const numRows = 14;
        const tableData = [];

        for (let i = 1; i <= numRows; i++) {
            const rowData = [
                i + ". " + getLessonTime(i - 1, day),
                getTeacher(className),
                "Przedmiot " + i,
                "Sala " + i
            ];
            tableData.push(rowData);
        }

        return tableData;
    }

    // Funkcja do uzyskania godziny lekcyjnej na podstawie numeru i dnia
    function getLessonTime(lessonNumber, day) {
        const lessonTimes = {
            "Poniedziałek": ["8:00-8:45", "8:50-9:35", "9:40-10:25", "10:30-11:15", "11:30-12:15", "12:20-13:05", "13:10-13:55", "14:00-14:45", "14:50-15:35", "15:40-16:25", "16:30-17:15", "17:20-18:05", "18:10-18:55", "19:00-19:45"],
            "Wtorek": ["8:00-8:45", "8:50-9:35", "9:40-10:25", "10:30-11:15", "11:30-12:15", "12:20-13:05", "13:10-13:55", "14:00-14:45", "14:50-15:35", "15:40-16:25"],
            "Środa": ["8:00-8:45", "8:50-9:35", "9:40-10:25", "10:30-11:15", "11:30-12:15", "12:20-13:05", "13:10-13:55", "14:00-14:45", "14:50-15:35", "15:40-16:25", "16:30-17:15", "17:20-18:05", "18:10-18:55", "19:00-19:45"],
            "Czwartek": ["8:00-8:45", "8:50-9:35", "9:40-10:25", "10:30-11:15", "11:30-12:15", "12:20-13:05", "13:10-13:55", "14:00-14:45", "14:50-15:35", "15:40-16:25", "16:30-17:15", "17:20-18:05", "18:10-18:55", "19:00-19:45"],
            "Piątek": ["8:00-8:45", "8:50-9:35", "9:40-10:25", "10:30-11:15", "11:30-12:15", "12:20-13:05", "13:10-13:55", "14:00-14:45", "14:50-15:35"]
        };

        return lessonTimes[day][lessonNumber] || "";
    }
});
