//program for convert suhu    
    var suhu = prompt('Input value to be converted(ex. 24,15) :');
    var suhuasal = prompt('Converted from(ex. celcius,reamur)');    
    var suhutujuan = prompt('Converted to(ex. celcius,reamur) :');
    var hasil=0;
//process celcius to fahrenheit,kelvin,reamur    
    if (suhuasal == "celcius") {
        if (suhutujuan == "fahrenheit") {
            hasil = suhu * 1.8 + 32;
        } else {
            if (suhutujuan == "kelvin") {
                hasil = suhu + 273.15;
            } else {
                if (suhutujuan == "reamur") {
                    hasil = suhu * 0.8;
                } else {
                    window.alert("Error");
                }
            }
        }
//output
        window.alert(hasil);
    } else {
//process fahrenheit to celcius,kelvin,reamur  
        if (suhuasal == "fahrenheit") {
            if (suhutujuan == "celcius") {
                hasil = (suhu - 32) / 1.8;
            } else {
                if (suhutujuan == "kelvin") {
                    hasil = (suhu + 459.67) / 1.8;
                } else {
                    if (suhutujuan == "reamur") {
                        hasil = (suhu - 32) / 2.25;
                    } else {
                        window.alert("Error");
                    }
                }
            }
        } else {
//process kelvin to celcius,fahrenheit,reamur  
            if (suhuasal == "kelvin") {
                if (suhutujuan == "celcius") {
                    hasil = suhu - 273.15;
                } else {
                    if (suhutujuan == "fahrenheit") {
                        hasil = suhu * 1.8 - 459.67;
                    } else {
                        if (suhutujuan == "reamur") {
                            hasil = (suhu - 273.15) * 0.8;
                        } else {
                            window.alert("Error");
                        }
                    }
                }
            } else {
//process reamur to celcius,fahrenheit,reamur  
                if (suhuasal == "reamur") {
                    if (suhutujuan == "celcius") {
                        hasil = suhu * 1.25;
                    } else {
                        if (suhutujuan == "fahrenheit") {
                            hasil = suhu * 2.25 + 32;
                        } else {
                            if (suhutujuan == "kelvin") {
                                hasil = suhu * 1.25 + 273.15;
                            } else {
                                window.alert("Error");
                            }
                        }
                    }
                } else {
                    window.alert("Error");
                }
            }
        }
//output
        window.alert(hasil);
    }

