const mhs = {
    nama: 'Arief',
    semester: 5,
    mataKuliah: [
        'Mata kuliah 1',
        'Mata kuliah 2',
        'Mata kuliah 3'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah : </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`
document.body.innerHTML = el;
