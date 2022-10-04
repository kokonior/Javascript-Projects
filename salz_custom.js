/*

Created By Mochammad Faisal

Created At    : 08/05/2019 15:08
Last Edited   : 25/10/2019 10:29
Template      : AdminLTE

*/
var ajaxRequest = null;
var reff = '';
var reffData = '';
var tableData = '';

$(function () {

	var csrf_name = $('#csrf').attr('data-name');
	var csrf_token = $('#csrf').val();

	$.ajaxSetup({
		cache: false
	});

	$.ajaxSetup({
		// type:'POST',
		// dataType: 'JSON',
		// data: {
		//   '<?php //echo $this->security->get_csrf_token_name(); ?>' : csrf_token
		// },
		success: function (response, status, xhr) {
			// let csrf_token = $('#csrf').val();
			// var token = (response.token != '' && response.token !== undefined ? response.token : csrf_token);
			var token = null;
			if ($('#csrf').length != 0) {
				token = $('#csrf').val();
			}

			if (response !== undefined) {


				if (response.token !== undefined) {
					if (response.token) {
						token = response.token;
					}
				} else {
					// token = csrf_token;
				}
			}

			// console.log('ajaxSetup : '+token);
			if ($('#csrf').length != 0) {
				$('#csrf').val(token);
			}
		},
		error: function (xhr, status, error) {
			if (xhr.responseText !== undefined) {
				var jsonResp = JSON.parse(xhr.responseText);
				var msg = "Sorry but there was an error: ";

				if (jsonResp.do == "login") {

					new PNotify({
						title: 'Error',
						text: jsonResp.message,
						type: 'error',
						animation: 'fade',
						animate_speed: 'fast',
						hide: true,
						delay: 5000
					});
					location.reload();

				}
			}
		}
	});

});

$(function () {

	// ajax req handle

	var xhrPool = [];
	$(document).ajaxSend(function (e, jqXHR, options) {
		xhrPool.push(jqXHR);
	});
	$(document).ajaxComplete(function (e, jqXHR, options) {
		xhrPool = $.grep(xhrPool, function (x) {
			return x != jqXHR
		});
	});
	var abort = function () {
		$.each(xhrPool, function (idx, jqXHR) {
			jqXHR.abort();
		});
	};
	var oldbeforeunload = window.onbeforeunload;
	window.onbeforeunload = function () {
		var r = oldbeforeunload ? oldbeforeunload() : undefined;
		if (r == undefined) {
			// only cancel requests if there is no prompt to stay on the page
			// if there is a prompt, it will likely give the requests enough time to finish
			abort();
		}
		return r;
	}

});

$(document).ready(function () {

	if ($('.sidebar-menu').length != 0) {

		var treeMenuOption = {
			followLink: true
		}

		$('.sidebar-menu').tree();

		$('ul').on('expanded.tree', function (e) {
			$(this).css('height', 'unset');
		});
	}

	moment.locale('id');
});

$(document).ajaxStart(function () {
	Pace.restart();
});

paceOptions = {
	ajax: true, // Monitors all ajax requests on the page
	document: true, // Checks for the existance of specific elements on the page
	eventLag: true, // Checks the document readyState
	elements: {
		selectors: ['.content-wrapper'] // Checks for event loop lag signaling that javascript is being executed
	},
};

Pace.options = paceOptions;

function initbreadCrumb() {

	var navClass = '.navbar-nav';
	var sidebarClass = '.sidebar-menu';
	var menuClass = '';

	if ($(navClass).length != 0) {
		menuClass = navClass;
	} else {
		menuClass = sidebarClass;
	}

	$(menuClass + ' li a').filter(function (e) {

		var $this = $(this);
		// console.log($this);

		// var icon_val = $($this[0]).find('i').attr('class');
		// var icon_html = $($this[0]).find('i')[0];
		// console.log(icon_val);
		// console.log(icon_html);
		var judultxt = $this[0].textContent.trim();
		// var icon_txt = '<i class="'+icon_val+'"></i>';
		// console.log(icon_txt);
		if ($this[0].attributes[1] !== undefined) {
			$('.breadcrumb').html('');
			$('.content-header h1').html('');
			$bc = $('.breadcrumb');
			$hd = $('.content-header h1');
			// $bc = $('<div class="item"></div>');
			// $bc = $('<ol class="breadcrumb"></ol>');
			// if(judultxt == 'Dashboard'){
			//   // $bc.prepend('<li><a href="#"><i class="fa fa-dashboard"> Dashboard</i></a></li>');
			//   $bc.prepend('<li><a href="#"><i class="fa fa-dashboard"> Dashboard</i></a></li>');
			//   $hd.prepend('' + judultxt + ' ');
			// }else{
			$this.parents('li').each(function (n, li) {
				var $a = $(li).children('a').clone(true).off();
				// var $a = $(li).children('a').clone();
				var judul = $a[0].textContent.trim();
				var icon_html = $($a[0]).find('i')[0];
				var icon_val = $($a[0]).find('i').attr('class');
				var icon_txt = '<i class="' + icon_val + '"></i> ';
				// console.log(icon_html);
				if ($a[0].attributes[1] !== undefined) {
					var z = '<li class="active">' + icon_txt + judul + '</li>';
					$(li).addClass('active');
				} else {
					var z = '<li>' + icon_txt + judul + '</li>';
				}
				// console.log($a[0].attributes[1]);
				$bc.prepend(z);
				$hd.prepend('' + judul + ' ');
				// $bc.prepend(' / ', z);
				// $bc.prepend(' / ', $a);
				// $('.content-header h1').text(judul);
			});
			// $bc.prepend('<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>');
			// }
			// var txt = $bc.prepend('<li><a href="#"><i class="fa fa-dashboard"> Dashboard</i></a></li>');
			// $('.breadcrumb').html( txt );
			// console.log(txt[0].children);
		}
		return false;


		// return this.data_menu == menu_callback;
	});

	// breadcrumb
	// $(menuClass).on('click', 'a', function() {});

	// $('.sidebar-menu').on('click', 'a', function(){
	//   var $this = $(this);
	//   // $('.sidebar-menu').find('.active').removeClass('active');
	//   if($('.sidebar-menu').find('.menu-open').length > 0){
	//     $('.sidebar-menu').find('.menu-open').removeClass('menu-open');
	//     // $this.parents('li').removeClass('menu-open');
	//   }else{
	//     // $('.sidebar-menu').find('.menu-close').removeClass('menu-close').addClass('menu-open').addClass('active');
	//     $this.parents('li').addClass('menu-open').addClass('active');
	//   }
	//   // $this.parents('li').addClass('menu-open').addClass('active');
	// });
}

function toUrl(namaviews, idcontent = '', id = '', data = '') {
	$.ajaxSetup({
		cache: false
	});
	var appViewUrl = base_url + 'page';
	var dataArr = {};
	if (idcontent == '' || idcontent == 0) {
		idcontent = 'tpl_content';
	}
	dataArr["page"] = namaviews;
	if (id) {
		dataArr["id"] = id;
	}

	if (data) {
		$.each(data, function (i, j) {
			// push data array key + aria-valuenow
			dataArr[i] = j;
		});

		if (data['reff'] !== undefined) {
			toUrl_reff = data['reff'];
		} else {
			toUrl_reff = '';
		}

	} else {
		toUrl_reff = '';
	}

	// if(id !=''){
	//   id = '?id='+id;
	//   // id = '/'+id;
	// }
	// var loaderz = '<div class="progress">'+
	// '<div class="progress-bar progress-bar-aqua" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">'+
	// '<span class="sr-only">20% Complete</span>'+
	// '</div>'+
	// '</div>';
	var xhz = null;
	if (data['reff'] !== undefined) {
		dinamicMenu(data['reff']);
	} else {
		dinamicMenu(namaviews);
	}
	// fieldCSRF();
	// $('#'+idcontent).html(loaderz);
	setTimeout(function () {
		$('#' + idcontent).load(appViewUrl, dataArr, function (response, status, xhr) {
			// $('#'+idcontent).load(appViewUrl, {"id" :id, "page" : namaviews}, function(response, status, xhr){
			// console.log(jsonResp.message);

			if (status == "error") {
				let jsonResp = JSON.parse(response);
				var msg = "Sorry but there was an error: ";
				$('#' + idcontent).html(msg + xhr.status + " " + xhr.statusText);
				xhz = "error";
				if (jsonResp.do == "login") {
					console.log(jsonResp.message);
					location.reload();
				}
			}

			if (xhr.readyState != 4) {
				xhr.abort();
			} else if (xhr.readyState == 4) {
				xhz = "success";
				// panggil boxWidget supaya collapse box bekerja
				$('.box').boxWidget();
			}
			// console.log(xhr);
		});
	}, 300);
	return false;
}

function dinamicMenu(menu_callback) {

	var navClass = '.navbar-nav';
	var sidebarClass = '.sidebar-menu';
	var menuClass = '';

	if ($('ul ' + navClass).length != 0) {
		menuClass = navClass;
	} else {
		menuClass = sidebarClass;
	}

	// console.log(menuClass);

	// remove
	$(menuClass + ' li a').parent().removeClass('active');
	$(menuClass + ' li a').filter(function () {
		return this.data_menu == menu_callback;
	}).parent().parent().parent().removeClass('active');

	// $('.sidebar-menu li a').on('click',function(){
	//   if($(this).attr('href') != '#' && !$(this).parent().hasClass('treeview')){
	//     $(this).parent().removeClass('menu-open');
	//     $('.treeview-menu').attr('style','display : none;');
	//     console.log('z');
	//   }else{
	//     console.log('x');
	//   }
	//   // console.log($(this).parent());
	// });

	// add
	$(menuClass + ' li a[data_menu="' + menu_callback + '"]').parent().addClass('active');
	$(menuClass + ' li a').filter(function (e) {
		return this.data_menu == menu_callback;
	}).parent().parent().parent().addClass('active');

	// console.log(menu_callback);
	//  $('ul.treeview-menu a').filter(function() {
	//   return this.data_menu == menu_callback;
	// }).parentsUntil(".sidebar-menu > .treeview-menu").addClass('active');

	// get element

	/*$('.sidebar-menu li a').filter(function() {
	  if($(this).attr('data_menu') == menu_callback){
	    console.log(this);
	  }
	});*/



}

function getMenuData(attr = 'href') {
	$('.sidebar-menu li a').filter(function () {
		if ($(this).parent().hasClass('active')) {
			var z = $(this)[0];
			var x = $(z).parent().find(".active").filter(":last");
			// console.log(x);
		}
	});

	// reffData =

	// var currentActive = $('.sidebar-menu li[class="active"]')[0].childNodes[1];
	// return $(currentActive).attr(attr);
}

function goToApp(link, is_internal = true, data = '') {
	// funciton for Hit API / LINK

	$.ajaxSetup({
		cache: false
	});

	var linkApp = "";

	var dataArr = {};

	if (is_internal) {
		linkApp = base_url + link;

		var newData = new FormData();

		newData.append('_mod', 'dashboard');

		if (data) {
			$.each(data, function (i, j) {
				newData.append(i, j);
			});
		}

		$.ajax({
			url: linkApp,
			method: "POST",
			data: newData,
			dataType: "JSON",
			contentType: false,
			cache: false,
			processData: false,
		}).done(function (response) {
			// console.log(response);
			if (response.success) {
				if (response.action !== undefined) {
					if (response.action == 'redirect') {

						// replace current tab
						// window.location.replace(response.link);

						// new tab
						window.open(response.link, '_blank');
					}
				}
			} else {
				alert(response.msg);
			}
		});

	} else {
		// window.location.href = base_url+ "sedot?filename="+filename+(folder != '' ? '&folder='+folder : '');
	}


	return false;
}

function initSelect(nama, selector = '', id = '', search = false, other = false, trigger = true, nulled = false, lastitem = false) {
	var auto;
	if (selector != '') {
		auto = $(selector);
	} else {
		auto = $('#' + nama);
	}
	//fixing select2 width
	auto.css('width', '100%');
	let NewData = new FormData();
	let url = base_url + 'admin/getData';
	NewData.append('table', nama);
	if (id != '') {
		NewData.append('id', id);
	}
	if (other == true) {
		NewData.append('other', other);
	}
	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'JSON',
		data: NewData,
		contentType: false,
		cache: false,
		processData: false
	}).done(function (response) {
		auto.empty();
		if (response.data.length != '') {
			$.each(response.data, function (i, j) {
				if (search == false) {
					if (id != '' && j.id == id) {
						auto.append('<option value="' + j.id + '" selected>' + j.nama + '</option>');
					} else {
						auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
					}
				} else {
					auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
				}
			});
			if (trigger == true) {
				if (nulled == true) {
					auto.val('');
				}
				if (lastitem == true) {
					auto.val(response.data[response.data.length - 1].id);
				}
				auto.trigger('change');
				// auto.append('<option value="" disabled>None</option>');
			}
			auto.select2();
		}
	});
}

function initSelect2(nama, selector = '', id = '', search = false, other = false, trigger = true, nulled = false, lastitem = false) {
	var auto;
	if (selector != '') {
		auto = $(selector);
	} else {
		auto = $('#' + nama);
	}
	//fixing select2 width
	auto.css('width', '100%');
	let NewData = new FormData();
	let url = base_url + 'admin/getData';
	NewData.append('table', nama);
	if (search) {
		if (id != '') {
			NewData.append('id', id);
		}
	}
	if (other == true) {
		NewData.append('other', other);
	}
	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'JSON',
		data: NewData,
		contentType: false,
		cache: false,
		processData: false
	}).done(function (response) {
		auto.empty();
		if (response.data.length != '') {
			$.each(response.data, function (i, j) {
				if (search == false) {
					if (id != '' && j.id == id) {
						auto.append('<option value="' + j.id + '" selected>' + j.nama + '</option>');
					} else {
						auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
					}
				} else {
					auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
				}
			});
			if (trigger == true) {
				if (nulled == true) {
					auto.val('');
				}
				if (lastitem == true) {
					auto.val(response.data[response.data.length - 1].id);
				}
				auto.trigger('change');
				// auto.append('<option value="" disabled>None</option>');
			}
			auto.select2();
		}
	});
}

function initSelect3(nama, selector = '', data = '', search = false, other = false, trigger = true, nulled = false, lastitem = false, init_select2 = true) {
	var auto;
	if (selector != '') {
		auto = $(selector);
	} else {
		auto = $('#' + nama);
	}
	//fixing select2 width
	auto.css('width', '100%');
	let NewData = new FormData();
	let url = base_url + 'admin/getData';
	NewData.append('table', nama);
	if (search) {
		if (data) {
			// if(data.id != ''){
			//   NewData.append('id', data.id);
			// }
			$.each(data, function (i, j) {
				NewData.append(i, j);
			});
		}
	}
	if (other == true) {
		NewData.append('other', other);
	}
	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'JSON',
		data: NewData,
		contentType: false,
		cache: false,
		processData: false
	}).done(function (response) {
		auto.empty();
		if (response.data.length != '') {
			$.each(response.data, function (i, j) {
				if (search == false) {
					if (id != '' && j.id == id) {
						auto.append('<option value="' + j.id + '" selected>' + j.nama + '</option>');
					} else {
						auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
					}
				} else {
					auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
				}
			});
			if (trigger == true) {
				if (nulled == true) {
					auto.val('');
				}
				if (lastitem == true) {
					auto.val(response.data[response.data.length - 1].id);
				}
				auto.trigger('change');
				// auto.append('<option value="" disabled>None</option>');
			}
			if (init_select2) {
				auto.select2();
			}
		}
	});
}

function InitSelect(nama, selector = '', init_select2 = true, data = '', pluginOption = '', dataAppend = '') {
	var auto;
	var _pluginOption = {};

	if (!pluginOption) {
		_pluginOption = {
			'search': false,
			'other': false,
			'trigger': true,
			'nulled': false,
			'lastitem': false,
			'init_select2': true,
		};
	} else {

		$.each(pluginOption, function (i, j) {
			_pluginOption[i] = j;
		});

	}

	if (selector != '') {
		auto = $(selector);
	} else {
		auto = $('#' + nama);
	}
	//fixing select2 width
	auto.css('width', '100%');
	let NewData = new FormData();
	let url = base_url + 'admin/getData';
	NewData.append('table', nama);
	if (data) {
		// other
		// id
		$.each(data, function (i, j) {
			NewData.append(i, j);
		});
	}

	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'JSON',
		data: NewData,
		contentType: false,
		cache: false,
		processData: false
	}).done(function (response) {
		auto.empty();

		if (dataAppend) {
			$.each(dataAppend, function (i, j) {
				auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
			});
		}

		if (response.data.length != '') {
			$.each(response.data, function (i, j) {
				if (_pluginOption['search'] !== undefined && _pluginOption['search'] == false) {
					if (data['id'] != '' && j.id == data['id']) {
						auto.append('<option value="' + j.id + '" selected>' + j.nama + '</option>');
					} else {
						auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
					}
				} else {
					auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
				}
			});
			if (_pluginOption['trigger'] !== undefined && _pluginOption['trigger'] == true) {
				if (_pluginOption['nulled'] !== undefined && _pluginOption['nulled'] == true) {
					auto.val('');
				}
				if (_pluginOption['lastitem'] !== undefined && _pluginOption['lastitem'] == true) {
					auto.val(response.data[response.data.length - 1].id);
				}
				auto.trigger('change');
				// auto.append('<option value="" disabled>None</option>');
			}
			if (init_select2) {
				auto.select2();
			}
		}
	});
}


function _InitSelect(nama, selector = '', urlAjax = '', dataAjax = '', pluginOption = '', dataAppend = '') {
	var auto;
	var _pluginOption = {};

	if (!pluginOption) {
		_pluginOption = {
			'search': false,
			'other': false,
			'trigger': true,
			'nulled': false,
			'lastitem': false,
			'select2': {
				options: '',
				enabled: true
			},
		};
	} else {

		$.each(pluginOption, function (i, j) {
			_pluginOption[i] = j;
		});

	}

	if (selector != '') {
		auto = $(selector);
	} else {
		auto = $('#' + nama);
	}
	//fixing select2 width
	auto.css('width', '100%');
	let NewData = new FormData();
	var url = '';

	if (urlAjax) {
		url = base_url + urlAjax;
	} else {
		url = base_url + 'admin/getData';
	}

	NewData.append('table', nama);
	NewData.append('_mod', 'select');

	if (dataAjax) {
		// other
		// id
		$.each(dataAjax, function (i, j) {
			NewData.append(i, j);
		});
	}

	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'JSON',
		data: NewData,
		contentType: false,
		cache: false,
		processData: false
	}).done(function (response) {
		auto.empty();

		if (dataAppend) {
			$.each(dataAppend, function (i, j) {
				auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
			});
		}

		if (response.data.length != '') {
			$.each(response.data, function (i, j) {
				if (_pluginOption['search'] !== undefined && _pluginOption['search']) {
					if (dataAjax['id'] != '' && j.id == dataAjax['id']) {
						auto.append('<option value="' + j.id + '" selected>' + j.nama + '</option>');
					} else {
						auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
					}
				} else {
					auto.append('<option value="' + j.id + '">' + j.nama + '</option>');
				}
			});
			if (_pluginOption['trigger'] !== undefined && _pluginOption['trigger'] == true) {
				if (_pluginOption['nulled'] !== undefined && _pluginOption['nulled'] == true) {
					auto.val('');
				}
				if (_pluginOption['lastitem'] !== undefined && _pluginOption['lastitem'] == true) {
					auto.val(response.data[response.data.length - 1].id);
				}
				auto.trigger('change');
				// auto.append('<option value="" disabled>None</option>');
			}

			if (_pluginOption['select2'] !== undefined) {
				if (_pluginOption['select2']['enabled'] == true) {
					if (_pluginOption['select2']['options'] !== undefined && _pluginOption['select2']['options']) {
						auto.select2(_pluginOption['select2']['options']);
					} else {
						auto.select2();
					}
				}
			} else {
				if (_pluginOption['select2']['options'] !== undefined && _pluginOption['select2']['options']) {
					auto.select2(_pluginOption['select2']['options']);
				} else {
					auto.select2();
				}
			}

		}
	});
}

function initAutoComplete(IDSelector, dataOption, pluginOption = '') {
	var dataArr = {};
	if (dataOption) {
		if (dataOption.limit === undefined) {
			// set default limit
			dataArr['limit'] = 10;
		}
		$.each(dataOption, function (i, j) {
			// push data array key + value
			// only two keys should be added
			//
			// table
			// other
			// limit
			dataArr[i] = j;
		});
	}
	$("#" + IDSelector).autocomplete({
		appendTo: (pluginOption.modal !== undefined ? "#" + pluginOption.modal : null), // to fix not showing when on modal
		minLength: 2,
		source: function (request, response) {
			dataArr["q"] = request.term;
			$.ajax({
				url: base_url + "admin/getData2",
				type: 'post',
				dataType: "json",
				data: dataArr,
				success: function (data) {
					response(data);
					// set limit item
					// default limit 10 items
					// var list_data = data;
					// var limit = (pluginOption.limit !== undefined ? pluginOption.limit : 10);
					// var result_data = list_data.slice(0, limit);
					// response(result_data);
				}
			});
		},
		select: function (event, ui) {
			var dataItems = ui.item;
			$("#" + IDSelector).val(dataItems.nama);
			return false;
		}
	}).autocomplete("instance")._renderItem = function (ul, item) {
		return $("<li></li>").append(item.nama).appendTo(ul);
	};
}

function initDatePicker(selector, pluginOption = '') {
	if (!pluginOption) {
		pluginOption = {
			format: 'yyyy-mm-dd',
			autoclose: true,
			language: 'id',
			weekStart: 1,
			todayBtn: 'linked',
			todayHighlight: true
		};
	}
	return $(selector).datepicker(pluginOption);
}

function setDatePicker(selector, value) {
	$(selector).datepicker('update', value);
}

function getFileExt(filePath) {
	// get file extension
	return filePath.substr(filePath.lastIndexOf('.') + 1).split('.')[0];
}

function getCurrentDate(format = '') {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	var today_Date = dd + '-' + mm + '-' + yyyy;
	if (format != '') {
		today_Date = moment(new Date()).format(format);
	}
	return today_Date;
}

function replaceMonth($month) {
	/*
	need moment.js plugin
	convert from month name to int
	example june to 06
	*/
	return moment().month($month).format("M");
}

function initMonth(selector = '', options = '') {
	var auto = $(selector);
	var _options = {};
	/*

	 example

	 initMonth('#bulan', {'trigger' : {value: '02', is_trigger: true} } );

	 */
	if (!options) {
		_options = {
			'trigger': {
				value: null,
				is_trigger: false
			},
			'disabled': null,
			'init_select2': true,
		};
	} else {

		$.each(options, function (i, j) {
			_options[i] = j;
		});

	}

	auto.css('width', '100%');
	auto.empty();
	// moment.locale('id');
	for (var i = 0; i < 12; i++) {
		var txt_disabled = '';

		// if(i<=9){
		//   i="0"+i;
		// }

		var val = parseInt(i) + 1;
		var res = moment().month(i).format("MMMM");

		// if (_options['disabled'] !== undefined && _options['disabled']){

		// _options['disabled'].sort();

		// $.each(_options['disabled'], function(z, x){
		//   var valDisabled = parseInt(x);
		//   console.log(valDisabled);

		//   if(valDisabled == val){
		//     console.log(val);

		//     txt_disabled = 'disabled';
		//   }
		//   else{
		//     txt_disabled = '';
		//   }
		// });

		// }

		auto.append('<option value="' + (val <= 9 ? "0" + val : val) + '" ' + txt_disabled + '>' + res + '</option>');
	}

	if (_options['init_select2'] !== undefined) {
		if (_options['init_select2']) {
			// remove search input
			auto.select2({
				minimumResultsForSearch: -1,
				// theme: "bootstrap",
				// placeholder: "placeholder",
				// width: 'auto',
				// dropdownAutoWidth: true,
				// allowClear: true,
			});
		}

	} else {
		// default return true, when undefined
		// remove search input
		auto.select2({
			minimumResultsForSearch: -1
		});
	}

	// if (_options['disabled'] !== undefined && _options['disabled']){

	// }

	if (_options['trigger'] !== undefined && _options['trigger']['is_trigger'] == true) {
		auto.val(_options['trigger']['value']).trigger('change');
	}

}

function initDate(selector = '', tahun = '', bulan = '') {
	var auto = $(selector);
	if (tahun != '' && bulan != '') {
		var tgl_start = moment(tahun + "-" + bulan).startOf('month').format('DD');
		var tgl_end = moment(tahun + "-" + bulan).endOf('month').format('DD');
	} else {
		var tgl_start = moment().startOf('month').format('DD');
		var tgl_end = moment().endOf('month').format('DD');
	}
	auto.css('width', '100%');
	auto.empty();
	// moment.locale('id');
	auto.append('<option value="">None</option>');
	for (var i = parseInt(tgl_start); i <= parseInt(tgl_end); i++) {
		// if(i<=9){
		//   i="0"+i;
		// }
		var val = (i <= 9 ? "0" + i : i);
		// var val = parseInt(i)+1;
		// auto.append('<option value="'+ (i != 7 ? val : 0) +'">'+res+'</option>');
		auto.append('<option value="' + val + '">' + i + '</option>');
	}
	auto.select2({
		minimumResultsForSearch: -1
	});
}

function initDays(selector = '') {
	var auto = $(selector);
	auto.css('width', '100%');
	auto.empty();
	// moment.locale('id');
	auto.append('<option value="">None</option>');
	for (var i = 1; i <= 7; i++) {
		// if(i<=9){
		//   i="0"+i;
		// }
		var val = parseInt(i);
		// var val = parseInt(i)+1;
		var res = moment().day(val).format("dddd");;
		// auto.append('<option value="'+ (i != 7 ? val : 0) +'">'+res+'</option>');
		auto.append('<option value="' + val + '">' + res + '</option>');
	}
	auto.select2({
		minimumResultsForSearch: -1
	});
}

function replaceTime(timeVal, prefix = ':') {
	var resExp = timeVal.split(prefix);
	var result = (parseInt(resExp[0]) <= 9 ? "0" : "") + resExp[0] + ":" + resExp[1];
	return result;
}

function formatCurrency(angka, prefix = 'Rp. ') {
	/* Fungsi formatRupiah */
	var number_string = angka.toString(),
		// var number_string = angka.replace(/[^,\d]/g, "").toString(),
		split = number_string.split(","),
		sisa = split[0].length % 3,
		hasil = split[0].substr(0, sisa),
		ribuan = split[0].substr(sisa).match(/\d{3}/gi);
	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if (ribuan) {
		separator = sisa ? "." : "";
		hasil += separator + ribuan.join(".");
	}
	hasil = split[1] !== undefined ? hasil + "," + split[1] : hasil;
	return prefix == undefined ? hasil : hasil ? "Rp. " + hasil : "";
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function getPercent(val1, val2) {
	// var val1 = 20;
	// var val2 = 1000;
	var result = (val1 / val2) * 100;
	result = result.toFixed(2);
	return result.toString() + '%';
}

function getPercentSingle(val) {
	var result = val;
	result = result.toFixed(2);
	return parseFloat(result.toString()) + ' %';
}

function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

/* FormData function */

function formDataDelete(frmData, name, index) {
	var keep = frmData.getAll(name);
	keep.splice(index, 1);
	frmData.delete(name);
	keep.forEach(value => frmData.append(name, value));
}

function formDataDeleteAll(frmData, name) {
	// name must be contains '[]'
	// ex: list[]

	frmData.delete(name);
	return false;
}

/* end of FormData function */

/* array function */

function onlyUnique(value, index, self) {
	// remove duplicate core
	return self.indexOf(value) === index;
}

function removeDuplicate(data) {
	// remove duplicate array
	return data.filter(onlyUnique);
}

function remove_duplicates(objectsArray) {
	// reff : https://stackoverflow.com/a/26943285/10351006
	var usedObjects = {};

	for (var i = objectsArray.length - 1; i >= 0; i--) {
		var so = JSON.stringify(objectsArray[i]);

		if (usedObjects[so]) {
			objectsArray.splice(i, 1);

		} else {
			usedObjects[so] = true;
		}
	}

	return objectsArray;

}

function findObjectByKey(data, keyName) {
	return data.filter(
		function data(data) {
			return data.keyName = keyname;
		}
	)
}

function chunk_arr(arr, len) {
	// Reff : https://stackoverflow.com/a/11764168/10351006

	var chunks = [],
		i = 0,
		n = arr.length;

	while (i < n) {
		chunks.push(arr.slice(i, i += len));
	}

	return chunks;
}

/* end of array function */

function genTblCSRF(table) {
	// function genTblCSRF(){
	// let dtTable = $('.dataTable').DataTable();
	let dtTable = $('#' + table).DataTable();
	dtTable.on('xhr', function () {
		let jsonData = dtTable.ajax.json();
		let dataJSON = {};
		if (jsonData !== undefined) {
			dataJSON = jsonData;
			if (dataJSON.token !== undefined && dataJSON.token.length != 0) {
				// console.log(dataJSON.token);
				genCSRF(dataJSON);
			}
		}
	});
}

function genCSRF(response) {
	var csrf_token = $('#csrf').val();
	var token = $('#csrf').val();
	// var token = (response.token != '' && response.token !== undefined ? response.token : csrf_token);
	if (response.token !== undefined && response.token != '') {
		token = response.token;
	} else {
		// token = csrf_token;
	}
	$('#csrf').val(token);
}


function sedot(filename, folder = '') {
	window.location.href = base_url + "sedot?filename=" + filename + (folder != '' ? '&folder=' + folder : '');
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

function replaceStrArr(findArray, replaceArray, str) {
	var i, regex = [],
		map = {};
	for (i = 0; i < findArray.length; i++) {
		regex.push(findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'));
		map[findArray[i]] = replaceArray[i];
	}
	regex = regex.join('|');
	str = str.replace(new RegExp(regex, 'g'), function (matched) {
		return map[matched];
	});
	return str;
}

function replaceArray(dataArr, findStr, replaceStr) {
	var index = -1;
	index = dataArr.indexOf(findStr);

	// console.log(index);

	if (index != -1) {
		// if found then replace
		dataArr.splice(index, 1, replaceStr);
	}

	// console.log(dataArr);
}

function nullToEmpty(data) {
	if (data == null) {
		return '';
	} else {
		return data;
	}
}

function exportTableToExcel(tableId, filename = '') {
	let dataType = 'application/vnd.ms-excel';
	let extension = '.xls';

	let base64 = function (s) {
		return window.btoa(unescape(encodeURIComponent(s)))
	};

	let template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
	let render = function (template, content) {
		return template.replace(/{(\w+)}/g, function (m, p) {
			return content[p];
		});
	};

	let tableElement = document.getElementById(tableId);

	filename = filename ? filename : 'exportExcel';

	let tableExcel = render(template, {
		worksheet: filename,
		table: tableElement.innerHTML
	});

	filename = filename + extension;

	if (navigator.msSaveOrOpenBlob) {
		let blob = new Blob(
			['\ufeff', tableExcel], {
				type: dataType
			}
		);

		navigator.msSaveOrOpenBlob(blob, filename);
	} else {
		let downloadLink = document.createElement("a");

		document.body.appendChild(downloadLink);

		downloadLink.href = 'data:' + dataType + ';base64,' + base64(tableExcel);

		downloadLink.download = filename;

		downloadLink.click();
	}
}



function capitalize_Words(str) {
	//capitalize_Words
	// reff : https://www.w3resource.com/javascript-exercises/javascript-string-exercise-9.php
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

// others

function dynamicSort(property) {
	// sort array of object by string property value
	// reff : https://stackoverflow.com/a/4760279/10351006

	// how to use
	// var sortedArrayOfObj = data_arr.sort(dynamicSort("order_index"));
	// console.log(sortedArrayOfObj);

	var sortOrder = 1;
	if (property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a, b) {
		/* next line works with strings and numbers,
		 * and you may want to customize it to your needs
		 */
		var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
		return result * sortOrder;
	}
}


// initbreadCrumb();


$(function () {
	// dropdown navigation menu multilevel
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});
});
