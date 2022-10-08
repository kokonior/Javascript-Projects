function formatRupiah(payload, prefix) {
    const data = parseInt(payload);
    const covert = data.toLocaleString();
    let split = covert.split(',');
    let changeFormat = split.join('.');

    return prefix == undefined ? changeFormat : 'Rp ' + changeFormat;
}