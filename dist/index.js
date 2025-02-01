"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>
const defaultErr = new Map();
const parentFlags = [true, true];
const allInput = {
    sCfname: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sFname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
                if (!/^[ก-๙]+$/.test(element.value))
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sLname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
                if (!/^[ก-๙]+$/.test(element.value))
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sFnameENG: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
                if (!/^[a-zA-Z0-9.']*$/.test(element.value))
                    return;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sLnameENG: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
                if (!/^[a-zA-Z0-9.']*$/.test(element.value))
                    return;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sPIN: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if (!idCardCheck(element.value.replaceAll("-", "")))
                    return false;
            }
            return true;
        },
        onClick: () => {
        }
    },
    sPassport: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sRace: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sNation: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sReligion: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element instanceof HTMLSelectElement) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sBirthday: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element instanceof HTMLSelectElement) {
                    if (element instanceof HTMLSelectElement) {
                        if (element.selectedIndex == 0)
                            return false;
                    }
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sBirthmonth: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element instanceof HTMLSelectElement) {
                    if (element instanceof HTMLSelectElement) {
                        if (element.selectedIndex == 0)
                            return false;
                    }
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sBirthyear: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element instanceof HTMLSelectElement) {
                    if (element instanceof HTMLSelectElement) {
                        if (element.selectedIndex == 0)
                            return false;
                    }
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sTel: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll("-", "").length !== 10)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sMail: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHno: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#sameAddress").get(0).checked) {
                    addressLinkS(["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHmoo: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#sameAddress").get(0).checked) {
                    addressLinkS(["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHroad: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#sameAddress").get(0).checked) {
                    addressLinkS(["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHsoi: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#sameAddress").get(0).checked) {
                    addressLinkS(["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHdistrict: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#sameAddress").get(0).checked) {
                    addressLinkS(["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHamphoe: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#sameAddress").get(0).checked) {
                    if ($("#sameAddress").get(0).checked) {
                        addressLinkS(["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                    }
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHprovince: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#sameAddress").get(0).checked) {
                    addressLinkS(["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHzipcode: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length !== 5)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (element instanceof HTMLInputElement) {
                if (element.value.length == 5) {
                    let resultsContainer = $('#Sresults');
                    let sAddress = "";
                    let sHtambon = "";
                    let sHamphoe = "";
                    let sHprovince = "";
                    let sHzipcode = element.value;
                    const data = yield fetch(`https://apply.pcshs.ac.th/Admission/register/searchtumbons?sHzipcode=${sHzipcode}`, {
                        method: "GET",
                    });
                    var results = (_a = (yield data.json())) !== null && _a !== void 0 ? _a : [];
                    resultsContainer.empty();
                    if (results.length > 0) {
                        resultsContainer.append('<div class="list-group-item result-header flex"><h6 class="m-0 d-flex justify-content-between">ผลการค้นหา <span>พบ ' + results.length + ' สถานที่</span></h6></div>');
                        results.forEach(function (result) {
                            var regex = new RegExp('(' + sHzipcode + ')', 'gi');
                            var sHzipcodeResult = result.sHzipcode.replace(regex, '<span class="highlight">$1</span>');
                            sHzipcodeResult = 'รหัสไปรษณีย์ ' + sHzipcodeResult;
                            if (result.sHprovince == "กรุงเทพมหานคร") {
                                sAddress = 'แขวง' + result.sHtambon + ' เขต' + result.sHamphoe + ' ' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            else {
                                sAddress = 'ต.' + result.sHtambon + ' อ.' + result.sHamphoe + ' จ.' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            sHtambon = "'" + result.sHtambon + "'";
                            sHamphoe = "'" + result.sHamphoe + "'";
                            sHprovince = "'" + result.sHprovince + "'";
                            sHzipcode = result.sHzipcode;
                            var listItem = $('<div></div>')
                                .addClass('list-group-item list-group-item-action');
                            var listItem2 = $('<div></div>')
                                .on("click", () => {
                                addressSelect(result.ID, result.sHzipcode, result.sHtambon, result.sHamphoe, result.sHprovince, "", "Now");
                            })
                                .addClass('row cursor-pointer');
                            var select = $('<div class="d-flex justify-content-center px-3"><img src="https://www.mytcas.com/img/i/i-yes.svg" alt="Yes Icon" width="24"></div>')
                                .addClass('');
                            var schools = $('<div></div>')
                                .addClass('col px-0');
                            var nameContainer = $('<div></div>')
                                .addClass('result-name')
                                .html(sHzipcodeResult);
                            var provinceContainer = $('<div></div>')
                                .addClass('result-province')
                                .html(sAddress);
                            schools.append(nameContainer, provinceContainer);
                            listItem2.append(select, schools);
                            listItem.append(listItem2);
                            resultsContainer.append(listItem);
                        });
                    }
                    else {
                        resultsContainer.append('<div class="list-group-item result-header"><h5 class="m-0 d-flex justify-content-between">ผลการค้นหา</h5></div>');
                        resultsContainer.append('<div class="list-group-item list-group-item-action">ไม่พบรหัสไปรษณีย์</div>');
                    }
                }
                else {
                    ["sHdistrict", "sHamphoe", "sHprovince"].forEach(id => {
                        $(`#${id}`).val("");
                        if ($("#sameAddress").get(0).checked) {
                            $(`#${id}Now`).val("");
                        }
                    });
                }
            }
            return true;
        }),
        onClick: (ev) => {
        }
    },
    sameAddress: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: (ev) => {
            const sameAddressElement = $("#sameAddress");
            if (ev instanceof HTMLInputElement) {
                if (sameAddressElement.get(0).checked) {
                    sameAddressElement.prop('checked', true);
                    ["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"].forEach(id => {
                        $(`#${id}`).get(0).readOnly = true;
                    });
                    addressLinkS(["sHnoNow", "sHmooNow", "sHroadNow", "sHzipcodeNow", "sHdistrictNow", "sHsoiNow", "sHamphoeNow", "sHprovinceNow"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                }
                else {
                    ["sHamphoeNow", "sHprovinceNow", "sHdistrictNow"].forEach(id => {
                        $(`#${id}`).val("");
                    });
                    ["sHnoNow", "sHmooNow", "sHroadNow", "sHsoiNow", "sHzipcodeNow"].forEach(id => {
                        $(`#${id}`).val("");
                        $(`#${id}`).get(0).readOnly = false;
                    });
                    sameAddressElement.removeProp("checked");
                }
            }
        }
    },
    sHnoNow: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHmooNow: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHroadNow: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHsoiNow: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHdistrictNow: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHamphoeNow: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHprovinceNow: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    sHzipcodeNow: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length !== 5)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (element instanceof HTMLInputElement) {
                if (element.value.length == 5) {
                    let resultsContainer = $('#SresultsNow');
                    let sAddress = "";
                    let sHtambon = "";
                    let sHamphoe = "";
                    let sHprovince = "";
                    let sHzipcode = element.value;
                    const data = yield fetch(`https://apply.pcshs.ac.th/Admission/register/searchtumbons?sHzipcode=${sHzipcode}`, {
                        method: "GET",
                    });
                    var results = (_a = (yield data.json())) !== null && _a !== void 0 ? _a : [];
                    resultsContainer.empty();
                    if (results.length > 0) {
                        resultsContainer.append('<div class="list-group-item result-header flex"><h6 class="m-0 d-flex justify-content-between">ผลการค้นหา <span>พบ ' + results.length + ' สถานที่</span></h6></div>');
                        results.forEach(function (result) {
                            var regex = new RegExp('(' + sHzipcode + ')', 'gi');
                            var sHzipcodeResult = result.sHzipcode.replace(regex, '<span class="highlight">$1</span>');
                            sHzipcodeResult = 'รหัสไปรษณีย์ ' + sHzipcodeResult;
                            if (result.sHprovince == "กรุงเทพมหานคร") {
                                sAddress = 'แขวง' + result.sHtambon + ' เขต' + result.sHamphoe + ' ' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            else {
                                sAddress = 'ต.' + result.sHtambon + ' อ.' + result.sHamphoe + ' จ.' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            sHtambon = "'" + result.sHtambon + "'";
                            sHamphoe = "'" + result.sHamphoe + "'";
                            sHprovince = "'" + result.sHprovince + "'";
                            sHzipcode = result.sHzipcode;
                            var listItem = $('<div></div>')
                                .addClass('list-group-item list-group-item-action');
                            var listItem2 = $('<div></div>')
                                .on("click", () => {
                                addressSelect(result.ID, result.sHzipcode, result.sHtambon, result.sHamphoe, result.sHprovince, "Now");
                            })
                                .addClass('row cursor-pointer');
                            var select = $('<div class="d-flex justify-content-center px-3"><img src="https://www.mytcas.com/img/i/i-yes.svg" alt="Yes Icon" width="24"></div>')
                                .addClass('');
                            var schools = $('<div></div>')
                                .addClass('col px-0');
                            var nameContainer = $('<div></div>')
                                .addClass('result-name')
                                .html(sHzipcodeResult);
                            var provinceContainer = $('<div></div>')
                                .addClass('result-province')
                                .html(sAddress);
                            schools.append(nameContainer, provinceContainer);
                            listItem2.append(select, schools);
                            listItem.append(listItem2);
                            resultsContainer.append(listItem);
                        });
                    }
                    else {
                        resultsContainer.append('<div class="list-group-item result-header"><h5 class="m-0 d-flex justify-content-between">ผลการค้นหา</h5></div>');
                        resultsContainer.append('<div class="list-group-item list-group-item-action">ไม่พบรหัสไปรษณีย์</div>');
                    }
                }
                else {
                    ["sHdistrictNow", "sHamphoeNow", "sHprovinceNow"].forEach(id => {
                        $(`#${id}`).val("");
                        if ($("#sameAddress").get(0).checked) {
                            $(`#${id}Now`).val("");
                        }
                    });
                }
            }
            return true;
        }),
        onClick: () => {
        }
    },
    fLiving: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
            $("#fHdistrict").val("");
            $("#fHamphoe").val("");
            $("#fHprovince").val("");
            const allD = document.getElementsByClassName("f-form");
            const allL = document.getElementsByClassName("fatherDeceased");
            for (let i = 0; i < allL.length; i++) {
                allL.item(i).readOnly = false;
                $(allL.item(i)).val("");
            }
            for (let i = 0; i < allD.length; i++) {
                const allEle = allD.item(i).getElementsByTagName("input");
                for (let i = 0; i < allEle.length; i++) {
                    console.log(allEle.item(i).name);
                    allEle.item(i).readOnly = false;
                    $(allEle.item(i)).val("");
                }
                const allSe = allD.item(i).getElementsByTagName("select");
                for (let i = 0; i < allSe.length; i++) {
                    allSe.item(i).disabled = false;
                    $(allSe.item(i)).get(0).selectedIndex = 0;
                }
            }
        }
    },
    fLivingNotKnow: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
            $("#fHdistrict").val("");
            $("#fHamphoe").val("");
            $("#fHprovince").val("");
            const allD = document.getElementsByClassName("f-form");
            const allL = document.getElementsByClassName("fatherDeceased");
            for (let i = 0; i < allL.length; i++) {
                allL.item(i).readOnly = true;
                $(allL.item(i)).val("");
            }
            for (let i = 0; i < allD.length; i++) {
                const allEle = allD.item(i).getElementsByTagName("input");
                for (let i = 0; i < allEle.length; i++) {
                    console.log(allEle.item(i).name);
                    allEle.item(i).readOnly = true;
                    $(allEle.item(i)).val("");
                }
                const allSe = allD.item(i).getElementsByTagName("select");
                for (let i = 0; i < allSe.length; i++) {
                    allSe.item(i).disabled = true;
                    $(allSe.item(i)).get(0).selectedIndex = 0;
                }
            }
            document.getElementById("fCfname").disabled = false;
            document.getElementById("fFname").readOnly = false;
            document.getElementById("fLname").readOnly = false;
        }
    },
    fDeceased: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
            $("#fHdistrict").val("");
            $("#fHamphoe").val("");
            $("#fHprovince").val("");
            const allD = document.getElementsByClassName("f-form");
            const allL = document.getElementsByClassName("fatherDeceased");
            for (let i = 0; i < allL.length; i++) {
                allL.item(i).readOnly = true;
                $(allL.item(i)).val("");
            }
            for (let i = 0; i < allD.length; i++) {
                const allEle = allD.item(i).getElementsByTagName("input");
                for (let i = 0; i < allEle.length; i++) {
                    console.log(allEle.item(i).name);
                    allEle.item(i).readOnly = true;
                    $(allEle.item(i)).val("");
                }
                const allSe = allD.item(i).getElementsByTagName("select");
                for (let i = 0; i < allSe.length; i++) {
                    allSe.item(i).disabled = true;
                    $(allSe.item(i)).get(0).selectedIndex = 0;
                }
            }
            document.getElementById("fCfname").disabled = false;
            document.getElementById("fFname").readOnly = false;
            document.getElementById("fLname").readOnly = false;
        }
    },
    fNotKnow: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
            $("#fHdistrict").val("");
            $("#fHamphoe").val("");
            $("#fHprovince").val("");
            const allD = document.getElementsByClassName("f-form");
            const allL = document.getElementsByClassName("fatherDeceased");
            for (let i = 0; i < allL.length; i++) {
                allL.item(i).readOnly = true;
                $(allL.item(i)).val("");
            }
            for (let i = 0; i < allD.length; i++) {
                const allEle = allD.item(i).getElementsByTagName("input");
                for (let i = 0; i < allEle.length; i++) {
                    console.log(allEle.item(i).name);
                    allEle.item(i).readOnly = true;
                    $(allEle.item(i)).val("");
                }
                const allSe = allD.item(i).getElementsByTagName("select");
                for (let i = 0; i < allSe.length; i++) {
                    allSe.item(i).disabled = true;
                    $(allSe.item(i)).get(0).selectedIndex = 0;
                }
            }
        }
    },
    fCfname: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#fLiving").get(0).checked || $("#fDeceased").get(0).checked || $("fLivingNotKnow").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fFname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked || $("#fDeceased").get(0).checked || $("fLivingNotKnow").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fLname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked || $("#fDeceased").get(0).checked || $("fLivingNotKnow").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fPIN: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (!idCardCheck(element.value.replaceAll("-", "")))
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (!idCardCheck(element.value.replaceAll("-", "")))
                        return false;
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    fRace: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fNation: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fReligion: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fBirthday: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fBirthmonth: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fBirthyear: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fOccu: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fEarnings: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fWorkplace: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fWorkplaceTel: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.value.replaceAll("-", "").length !== 9)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.value.length !== 9)
                        return false;
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    fTel: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.value.replaceAll("-", "").length !== 10)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#fLiving").get(0).checked) {
                    if (element.value.length !== 10)
                        return false;
                }
            }
            return true;
        },
        onClick: () => {
        }
    },
    fMail: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    fsameAddress: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onClick: () => {
            if ($("#fLiving").get(0).checked) {
                if (document.getElementById("sameAddress").readOnly == false) {
                    if ($("#fsameAddress").get(0).checked) {
                        $("#fsameAddress").prop('checked', true);
                        ["fHno", "fHmoo", "fHroad", "fHzipcode", "fHdistrict", "fHsoi", "fHamphoe", "fHprovince"].forEach(id => {
                            $(`#${id}`).get(0).readOnly = true;
                        });
                        addressLinkS(["fHno", "fHmoo", "fHroad", "fHzipcode", "fHdistrict", "fHsoi", "fHamphoe", "fHprovince"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                    }
                    else {
                        $("#fsameAddress").prop('checked', false);
                        ["fHno", "fHmoo", "fHroad", "fHzipcode", "fHsoi"].forEach(id => {
                            $(`#${id}`).get(0).readOnly = false;
                            $(`#${id}`).val("");
                        });
                        ["fHdistrict", "fHamphoe", "fHprovince"].forEach(id => {
                            $(`#${id}`).val("");
                        });
                    }
                }
            }
            else {
                $("#fsameAddress").prop('checked', false);
            }
        }
    },
    fHno: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for fHno */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for fHno */
            }
            return true;
        },
        onClick: () => {
        }
    },
    fHmoo: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for fHmoo */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for fHmoo */
            }
            return true;
        },
        onClick: () => {
        }
    },
    fHroad: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for fHroad */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for fHroad */
            }
            return true;
        },
        onClick: () => {
        }
    },
    fHsoi: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for fHsoi */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for fHsoi */
            }
            return true;
        },
        onClick: () => {
        }
    },
    fHdistrict: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for fHdistrict */
            }
            return true;
        },
        onClick: () => {
        }
    },
    fHamphoe: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for fHamphoe */
            }
            return true;
        },
        onClick: () => {
        }
    },
    fHprovince: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for fHprovince */
            }
            return true;
        },
        onClick: () => {
        }
    },
    fHzipcode: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length !== 5)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (element instanceof HTMLInputElement) {
                if (element.value.length == 5) {
                    let resultsContainer = $('#Fresults');
                    let sAddress = "";
                    let sHtambon = "";
                    let sHamphoe = "";
                    let sHprovince = "";
                    let sHzipcode = element.value;
                    const data = yield fetch(`https://apply.pcshs.ac.th/Admission/register/searchtumbons?sHzipcode=${sHzipcode}`, {
                        method: "GET",
                    });
                    var results = (_a = (yield data.json())) !== null && _a !== void 0 ? _a : [];
                    resultsContainer.empty();
                    if (results.length > 0) {
                        resultsContainer.append('<div class="list-group-item result-header flex"><h6 class="m-0 d-flex justify-content-between">ผลการค้นหา <span>พบ ' + results.length + ' สถานที่</span></h6></div>');
                        results.forEach(function (result) {
                            var regex = new RegExp('(' + sHzipcode + ')', 'gi');
                            var sHzipcodeResult = result.sHzipcode.replace(regex, '<span class="highlight">$1</span>');
                            sHzipcodeResult = 'รหัสไปรษณีย์ ' + sHzipcodeResult;
                            if (result.sHprovince == "กรุงเทพมหานคร") {
                                sAddress = 'แขวง' + result.sHtambon + ' เขต' + result.sHamphoe + ' ' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            else {
                                sAddress = 'ต.' + result.sHtambon + ' อ.' + result.sHamphoe + ' จ.' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            sHtambon = "'" + result.sHtambon + "'";
                            sHamphoe = "'" + result.sHamphoe + "'";
                            sHprovince = "'" + result.sHprovince + "'";
                            sHzipcode = result.sHzipcode;
                            var listItem = $('<div></div>')
                                .addClass('list-group-item list-group-item-action');
                            var listItem2 = $('<div></div>')
                                .on("click", () => {
                                $("#fHdistrict").val(result.sHtambon);
                                $("#fHamphoe").val(result.sHamphoe);
                                $("#fHprovince").val(result.sHprovince);
                                $("#fHzipcode").val(result.sHzipcode);
                                resultsContainer.empty();
                            })
                                .addClass('row cursor-pointer');
                            var select = $('<div class="d-flex justify-content-center px-3"><img src="https://www.mytcas.com/img/i/i-yes.svg" alt="Yes Icon" width="24"></div>')
                                .addClass('');
                            var schools = $('<div></div>')
                                .addClass('col px-0');
                            var nameContainer = $('<div></div>')
                                .addClass('result-name')
                                .html(sHzipcodeResult);
                            var provinceContainer = $('<div></div>')
                                .addClass('result-province')
                                .html(sAddress);
                            schools.append(nameContainer, provinceContainer);
                            listItem2.append(select, schools);
                            listItem.append(listItem2);
                            resultsContainer.append(listItem);
                        });
                    }
                    else {
                        resultsContainer.append('<div class="list-group-item result-header"><h5 class="m-0 d-flex justify-content-between">ผลการค้นหา</h5></div>');
                        resultsContainer.append('<div class="list-group-item list-group-item-action">ไม่พบรหัสไปรษณีย์</div>');
                    }
                }
                else {
                    ["fHdistrict", "fHamphoe", "fHprovince"].forEach(id => {
                        $(`#${id}`).val("");
                    });
                }
            }
            return true;
        }),
        onClick: () => {
        }
    },
    mLiving: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mLiving */
            }
            return true;
        },
        onClick: () => {
            $("#mHdistrict").val("");
            $("#mHamphoe").val("");
            $("#mHprovince").val("");
            const allD = document.getElementsByClassName("m-form");
            const allL = document.getElementsByClassName("motherDeceased");
            for (let i = 0; i < allL.length; i++) {
                allL.item(i).readOnly = false;
                $(allL.item(i)).val("");
            }
            for (let i = 0; i < allD.length; i++) {
                console.log("s");
                const allEle = allD.item(i).getElementsByTagName("input");
                for (let i = 0; i < allEle.length; i++) {
                    console.log(allEle.item(i).name);
                    allEle.item(i).readOnly = false;
                    $(allEle.item(i)).val("");
                }
                const allSe = allD.item(i).getElementsByTagName("select");
                for (let i = 0; i < allSe.length; i++) {
                    allSe.item(i).disabled = false;
                    $(allSe.item(i)).get(0).selectedIndex = 0;
                }
            }
        }
    },
    mLivingNotKnow: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for mLivingNotKnow */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mLivingNotKnow */
            }
            return true;
        },
        onClick: () => {
            $("#mHdistrict").val("");
            $("#mHamphoe").val("");
            $("#mHprovince").val("");
            const allD = document.getElementsByClassName("m-form");
            const allL = document.getElementsByClassName("motherDeceased");
            for (let i = 0; i < allL.length; i++) {
                allL.item(i).readOnly = true;
                $(allL.item(i)).val("");
            }
            for (let i = 0; i < allD.length; i++) {
                const allEle = allD.item(i).getElementsByTagName("input");
                for (let i = 0; i < allEle.length; i++) {
                    console.log(allEle.item(i).name);
                    allEle.item(i).readOnly = true;
                    $(allEle.item(i)).val("");
                }
                const allSe = allD.item(i).getElementsByTagName("select");
                for (let i = 0; i < allSe.length; i++) {
                    allSe.item(i).disabled = true;
                    $(allSe.item(i)).get(0).selectedIndex = 0;
                }
            }
            document.getElementById("mCfname").disabled = false;
            document.getElementById("mFname").readOnly = false;
            document.getElementById("mLname").readOnly = false;
        }
    },
    mDeceased: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for mDeceased */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mDeceased */
            }
            return true;
        },
        onClick: () => {
            $("#mHdistrict").val("");
            $("#mHamphoe").val("");
            $("#mHprovince").val("");
            const allD = document.getElementsByClassName("m-form");
            const allL = document.getElementsByClassName("motherDeceased");
            for (let i = 0; i < allL.length; i++) {
                allL.item(i).readOnly = true;
                $(allL.item(i)).val("");
            }
            for (let i = 0; i < allD.length; i++) {
                const allEle = allD.item(i).getElementsByTagName("input");
                for (let i = 0; i < allEle.length; i++) {
                    console.log(allEle.item(i).name);
                    allEle.item(i).readOnly = true;
                    $(allEle.item(i)).val("");
                }
                const allSe = allD.item(i).getElementsByTagName("select");
                for (let i = 0; i < allSe.length; i++) {
                    allSe.item(i).disabled = true;
                    $(allSe.item(i)).get(0).selectedIndex = 0;
                }
            }
            document.getElementById("mCfname").disabled = false;
            document.getElementById("mFname").readOnly = false;
            document.getElementById("mLname").readOnly = false;
        }
    },
    mNotKnow: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for mNotKnow */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mNotKnow */
            }
            return true;
        },
        onClick: () => {
            $("#mHdistrict").val("");
            $("#mHamphoe").val("");
            $("#mHprovince").val("");
            const allD = document.getElementsByClassName("m-form");
            const allL = document.getElementsByClassName("motherDeceased");
            for (let i = 0; i < allL.length; i++) {
                allL.item(i).readOnly = true;
                $(allL.item(i)).val("");
            }
            for (let i = 0; i < allD.length; i++) {
                const allEle = allD.item(i).getElementsByTagName("input");
                for (let i = 0; i < allEle.length; i++) {
                    console.log(allEle.item(i).name);
                    allEle.item(i).readOnly = true;
                    $(allEle.item(i)).val("");
                }
                const allSe = allD.item(i).getElementsByTagName("select");
                for (let i = 0; i < allSe.length; i++) {
                    allSe.item(i).disabled = true;
                    $(allSe.item(i)).get(0).selectedIndex = 0;
                }
            }
        }
    },
    mCfname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked || $("#mDeceased").get(0).checked || $("#mLivingNotKnow").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mCfname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mFname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked || $("#mDeceased").get(0).checked || $("#mLivingNotKnow").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mFname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mLname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked || $("#mDeceased").get(0).checked || $("#mLivingNotKnow").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mLname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mPIN: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked) {
                    if (!idCardCheck(element.value.replaceAll("-", "")))
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if (!idCardCheck(element.value.replaceAll("-", "")))
                    return false;
            }
            return true;
        },
        onClick: () => {
        }
    },
    mRace: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mRace */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mNation: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mNation */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mReligion: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
            }
            return true;
        },
        onClick: () => {
        }
    },
    mBirthday: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for mBirthday */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mBirthmonth: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for mBirthmonth */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mBirthyear: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for mBirthyear */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mOccu: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.selectedIndex == 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for mOccu */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mEarnings: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mEarnings */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mWorkplace: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.value.length <= 0)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mWorkplace */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mWorkplaceTel: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.value.replaceAll("-", "").length !== 9)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mWorkplaceTel */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mTel: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if ($("#mLiving").get(0).checked) {
                    if (element.value.replaceAll("-", "").length !== 10)
                        return false;
                }
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mTel */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mMail: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mMail */
            }
            return true;
        },
        onClick: () => {
        }
    },
    msameAddress: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for msameAddress */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for msameAddress */
            }
            return true;
        },
        onClick: () => {
            if ($("#mLiving").get(0).checked) {
                if (document.getElementById("sameAddress").readOnly == false) {
                    if ($("#msameAddress").get(0).checked) {
                        $("#msameAddress").prop('checked', true);
                        ["mHno", "mHmoo", "mHroad", "mHzipcode", "mHdistrict", "mHsoi", "mHamphoe", "mHprovince"].forEach(id => {
                            $(`#${id}`).get(0).readOnly = true;
                        });
                        addressLinkS(["mHno", "mHmoo", "mHroad", "mHzipcode", "mHdistrict", "mHsoi", "mHamphoe", "mHprovince"], ["sHno", "sHmoo", "sHroad", "sHzipcode", "sHdistrict", "sHsoi", "sHamphoe", "sHprovince"]);
                    }
                    else {
                        $("#msameAddress").prop('checked', false);
                        ["mHno", "mHmoo", "mHroad", "mHzipcode", "mHsoi"].forEach(id => {
                            $(`#${id}`).get(0).readOnly = false;
                            $(`#${id}`).val("");
                        });
                        ["mHdistrict", "mHamphoe", "mHprovince"].forEach(id => {
                            $(`#${id}`).val("");
                        });
                    }
                }
            }
            else {
                $("#msameAddress").prop('checked', false);
            }
        }
    },
    mHno: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for mHno */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mHno */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mHmoo: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for mHmoo */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mHmoo */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mHroad: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for mHroad */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mHroad */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mHsoi: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for mHsoi */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mHsoi */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mHdistrict: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mHdistrict */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mHamphoe: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mHamphoe */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mHprovince: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for mHprovince */
            }
            return true;
        },
        onClick: () => {
        }
    },
    mHzipcode: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for mHzipcode */
            }
            return true;
        },
        onKeyChange: (element) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (element instanceof HTMLInputElement) {
                if (element.value.length == 5) {
                    let resultsContainer = $('#Mresults');
                    let sAddress = "";
                    let sHtambon = "";
                    let sHamphoe = "";
                    let sHprovince = "";
                    let sHzipcode = element.value;
                    const data = yield fetch(`https://apply.pcshs.ac.th/Admission/register/searchtumbons?sHzipcode=${sHzipcode}`, {
                        method: "GET",
                    });
                    var results = (_a = (yield data.json())) !== null && _a !== void 0 ? _a : [];
                    resultsContainer.empty();
                    if (results.length > 0) {
                        resultsContainer.append('<div class="list-group-item result-header flex"><h6 class="m-0 d-flex justify-content-between">ผลการค้นหา <span>พบ ' + results.length + ' สถานที่</span></h6></div>');
                        results.forEach(function (result) {
                            var regex = new RegExp('(' + sHzipcode + ')', 'gi');
                            var sHzipcodeResult = result.sHzipcode.replace(regex, '<span class="highlight">$1</span>');
                            sHzipcodeResult = 'รหัสไปรษณีย์ ' + sHzipcodeResult;
                            if (result.sHprovince == "กรุงเทพมหานคร") {
                                sAddress = 'แขวง' + result.sHtambon + ' เขต' + result.sHamphoe + ' ' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            else {
                                sAddress = 'ต.' + result.sHtambon + ' อ.' + result.sHamphoe + ' จ.' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            sHtambon = "'" + result.sHtambon + "'";
                            sHamphoe = "'" + result.sHamphoe + "'";
                            sHprovince = "'" + result.sHprovince + "'";
                            sHzipcode = result.sHzipcode;
                            var listItem = $('<div></div>')
                                .addClass('list-group-item list-group-item-action');
                            var listItem2 = $('<div></div>')
                                .on("click", () => {
                                $("#mHdistrict").val(result.sHtambon);
                                $("#mHamphoe").val(result.sHamphoe);
                                $("#mHprovince").val(result.sHprovince);
                                $("#mHzipcode").val(result.sHzipcode);
                                resultsContainer.empty();
                            })
                                .addClass('row cursor-pointer');
                            var select = $('<div class="d-flex justify-content-center px-3"><img src="https://www.mytcas.com/img/i/i-yes.svg" alt="Yes Icon" width="24"></div>')
                                .addClass('');
                            var schools = $('<div></div>')
                                .addClass('col px-0');
                            var nameContainer = $('<div></div>')
                                .addClass('result-name')
                                .html(sHzipcodeResult);
                            var provinceContainer = $('<div></div>')
                                .addClass('result-province')
                                .html(sAddress);
                            schools.append(nameContainer, provinceContainer);
                            listItem2.append(select, schools);
                            listItem.append(listItem2);
                            resultsContainer.append(listItem);
                        });
                    }
                    else {
                        resultsContainer.append('<div class="list-group-item result-header"><h5 class="m-0 d-flex justify-content-between">ผลการค้นหา</h5></div>');
                        resultsContainer.append('<div class="list-group-item list-group-item-action">ไม่พบรหัสไปรษณีย์</div>');
                    }
                }
                else {
                    ["mHdistrict", "mHamphoe", "mHprovince"].forEach(id => {
                        $(`#${id}`).val("");
                    });
                }
            }
            return true;
        }),
        onClick: () => {
        }
    },
    inlineRadio1: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for inlineRadio1 */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for inlineRadio1 */
            }
            return true;
        },
        onClick: () => {
        }
    },
    inlineRadio2: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for inlineRadio2 */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for inlineRadio2 */
            }
            return true;
        },
        onClick: () => {
        }
    },
    inlineRadio3: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for inlineRadio3 */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for inlineRadio3 */
            }
            return true;
        },
        onClick: () => {
        }
    },
    inlineRadio4: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for inlineRadio4 */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for inlineRadio4 */
            }
            return true;
        },
        onClick: () => {
        }
    },
    inlineRadio5: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for inlineRadio5 */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for inlineRadio5 */
            }
            return true;
        },
        onClick: () => {
        }
    },
    inlineRadio6: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for inlineRadio6 */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for inlineRadio6 */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sBrosis: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sBrosis */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sNoSon: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sNoSon */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sParentf: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sParentf */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sParentf */
            }
            return true;
        },
        onClick: () => {
            let isPass = true;
            ["fCfname", "fFname", "fLname", "fPIN", "fRace", "fNation", "fReligion", "fBirthday", "fBirthmonth", "fBirthyear", "fOccu", "fEarnings", "fWorkplace", "fWorkplaceTel", "fTel", "fMail", "fsameAddress", "fHno", "fHmoo", "fHroad", "fHsoi", "fHdistrict", "fHamphoe", "fHprovince", "fHzipcode"].forEach(id => {
                var _a;
                if (allInput[id].onValidation((_a = document.getElementById(id)) !== null && _a !== void 0 ? _a : document.getElementById(id)) == false) {
                    console.log(id);
                    isPass = false;
                }
            });
            //clear
            $("#pFname").get(0).selectedIndex = 0;
            $("#pFname").val("");
            $("#pLname").val("");
            $("#pPIN").val("");
            $("#pRace").val("");
            $("#pNation").val("");
            $("#pReligion").get(0).selectedIndex = 0;
            $("#pBirthday").get(0).selectedIndex = 0;
            $("#pBirthmonth").get(0).selectedIndex = 0;
            $("#pBirthyear").get(0).selectedIndex = 0;
            $("#pOccu").get(0).selectedIndex = 0;
            $("#pEarnings").val("");
            $("#pWorkplace").val("");
            $("#pWorkplaceTel").val("");
            $("#pTel").val("");
            $("#pMail").val("");
            $("#psameAddress").prop('checked', false);
            $("#pHno").val("");
            $("#pHmoo").val("");
            $("#pHroad").val("");
            $("#pHsoi").val("");
            $("#pHdistrict").val("");
            $("#pHamphoe").val("");
            $("#pHprovince").val("");
            $("#pHzipcode").val("");
            $("#pRelative").val("");
            if (!isPass) {
                return;
            }
            //clear readOnly
            $("#pCfname").prop('disabled', false);
            $("#pFname").prop('readonly', false);
            $("#pLname").prop('readonly', false);
            $("#pPIN").prop('readonly', false);
            $("#pRace").prop('readonly', false);
            $("#pNation").prop('readonly', false);
            $("#pReligion").prop('disabled', false);
            $("#pBirthday").prop('disabled', false);
            $("#pBirthmonth").prop('disabled', false);
            $("#pBirthyear").prop('disabled', false);
            $("#pOccu").prop('disabled', false);
            $("#pEarnings").prop('readonly', false);
            $("#pWorkplace").prop('readonly', false);
            $("#pWorkplaceTel").prop('readonly', false);
            $("#pTel").prop('readonly', false);
            $("#pMail").prop('readonly', false);
            $("#psameAddress").prop('disabled', false);
            $("#pHno").prop('readonly', false);
            $("#pHmoo").prop('readonly', false);
            $("#pHroad").prop('readonly', false);
            $("#pHsoi").prop('readonly', false);
            $("#pZipcode").prop('readonly', false);
            $("#pRelative").prop('readonly', false);
            //val
            $("#pCfname").val($("#fCfname").val());
            $("#pFname").val($("#fFname").val());
            $("#pLname").val($("#fLname").val());
            $("#pPIN").val($("#fPIN").val());
            $("#pRace").val($("#fRace").val());
            $("#pNation").val($("#fNation").val());
            $("#pReligion").val($("#fReligion").val());
            $("#pBirthday").val($("#fBirthday").val());
            $("#pBirthmonth").val($("#fBirthmonth").val());
            $("#pBirthyear").val($("#fBirthyear").val());
            $("#pOccu").val($("#fOccu").val());
            $("#pEarnings").val($("#fEarnings").val());
            $("#pWorkplace").val($("#fWorkplace").val());
            $("#pWorkplaceTel").val($("#fWorkplaceTel").val());
            $("#pTel").val($("#fTel").val());
            $("#pMail").val($("#fMail").val());
            $("#psameAddress").prop('checked', $("#fsameAddress").prop('checked'));
            $("#pHno").val($("#fHno").val());
            $("#pHmoo").val($("#fHmoo").val());
            $("#pHroad").val($("#fHroad").val());
            $("#pHsoi").val($("#fHsoi").val());
            $("#pHdistrict").val($("#fHdistrict").val());
            $("#pHamphoe").val($("#fHamphoe").val());
            $("#pHprovince").val($("#fHprovince").val());
            $("#pHzipcode").val($("#fHzipcode").val());
            $("#pRelative").val("บิดา");
            //readonly
            $("#pCfname").prop('disabled', true);
            $("#pFname").prop('readonly', true);
            $("#pLname").prop('readonly', true);
            $("#pPIN").prop('readonly', true);
            $("#pRace").prop('readonly', true);
            $("#pNation").prop('readonly', true);
            $("#pReligion").prop('disabled', true);
            $("#pBirthday").prop('disabled', true);
            $("#pBirthmonth").prop('disabled', true);
            $("#pBirthyear").prop('disabled', true);
            $("#pOccu").prop('disabled', true);
            $("#pEarnings").prop('readonly', true);
            $("#pWorkplace").prop('readonly', true);
            $("#pWorkplaceTel").prop('readonly', true);
            $("#pTel").prop('readonly', true);
            $("#pMail").prop('readonly', true);
            $("#psameAddress").prop('disabled', true);
            $("#pHno").prop('readonly', true);
            $("#pHmoo").prop('readonly', true);
            $("#pHroad").prop('readonly', true);
            $("#pHsoi").prop('readonly', true);
            $("#pHdistrict").prop('readonly', true);
            $("#pHamphoe").prop('readonly', true);
            $("#pHprovince").prop('readonly', true);
            $("#pHzipcode").prop('readonly', true);
            $("#pRelative").prop('readonly', true);
        }
    },
    sParentm: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sParentm */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sParentm */
            }
            return true;
        },
        onClick: () => {
            //validation all motherValue is not empty by OnValidation
            let isPass = true;
            ["mCfname", "mFname", "mLname", "mPIN", "mRace", "mNation", "mReligion", "mBirthday", "mBirthmonth", "mBirthyear", "mOccu", "mEarnings", "mWorkplace", "mWorkplaceTel", "mTel", "mMail", "msameAddress", "mHno", "mHmoo", "mHroad", "mHsoi", "mHdistrict", "mHamphoe", "mHprovince", "mHzipcode"].forEach(id => {
                var _a;
                if (allInput[id].onValidation((_a = document.getElementById(id)) !== null && _a !== void 0 ? _a : document.getElementById(id)) == false) {
                    isPass = false;
                }
            });
            //clear
            $("#pFname").get(0).selectedIndex = 0;
            $("#pFname").val("");
            $("#pLname").val("");
            $("#pPIN").val("");
            $("#pRace").val("");
            $("#pNation").val("");
            $("#pReligion").get(0).selectedIndex = 0;
            $("#pBirthday").get(0).selectedIndex = 0;
            $("#pBirthmonth").get(0).selectedIndex = 0;
            $("#pBirthyear").get(0).selectedIndex = 0;
            $("#pOccu").get(0).selectedIndex = 0;
            $("#pEarnings").val("");
            $("#pWorkplace").val("");
            $("#pWorkplaceTel").val("");
            $("#pTel").val("");
            $("#pMail").val("");
            $("#psameAddress").prop('checked', false);
            $("#pHno").val("");
            $("#pHmoo").val("");
            $("#pHroad").val("");
            $("#pHsoi").val("");
            $("#pHdistrict").val("");
            $("#pHamphoe").val("");
            $("#pHprovince").val("");
            $("#pHzipcode").val("");
            $("#pRelative").val("");
            if (!isPass) {
                return;
            }
            //clear readOnly
            $("#pCfname").prop('disabled', false);
            $("#pFname").prop('readonly', false);
            $("#pLname").prop('readonly', false);
            $("#pPIN").prop('readonly', false);
            $("#pRace").prop('readonly', false);
            $("#pNation").prop('readonly', false);
            $("#pReligion").prop('disabled', false);
            $("#pBirthday").prop('disabled', false);
            $("#pBirthmonth").prop('disabled', false);
            $("#pBirthyear").prop('disabled', false);
            $("#pOccu").prop('disabled', false);
            $("#pEarnings").prop('readonly', false);
            $("#pWorkplace").prop('readonly', false);
            $("#pWorkplaceTel").prop('readonly', false);
            $("#pTel").prop('readonly', false);
            $("#pMail").prop('readonly', false);
            $("#psameAddress").prop('disabled', false);
            $("#pHno").prop('readonly', false);
            $("#pHmoo").prop('readonly', false);
            $("#pHroad").prop('readonly', false);
            $("#pHsoi").prop('readonly', false);
            $("#pZipcode").prop('readonly', false);
            $("#pRelative").prop('readonly', false);
            //val
            $("#pCfname").val($("#mCfname").val());
            $("#pFname").val($("#mFname").val());
            $("#pLname").val($("#mLname").val());
            $("#pPIN").val($("#mPIN").val());
            $("#pRace").val($("#mRace").val());
            $("#pNation").val($("#mNation").val());
            $("#pReligion").val($("#mReligion").val());
            $("#pBirthday").val($("#mBirthday").val());
            $("#pBirthmonth").val($("#mBirthmonth").val());
            $("#pBirthyear").val($("#mBirthyear").val());
            $("#pOccu").val($("#mOccu").val());
            $("#pEarnings").val($("#mEarnings").val());
            $("#pWorkplace").val($("#mWorkplace").val());
            $("#pWorkplaceTel").val($("#mWorkplaceTel").val());
            $("#pTel").val($("#mTel").val());
            $("#pMail").val($("#mMail").val());
            $("#psameAddress").prop('checked', $("#msameAddress").prop('checked'));
            $("#pHno").val($("#mHno").val());
            $("#pHmoo").val($("#mHmoo").val());
            $("#pHroad").val($("#mHroad").val());
            $("#pHsoi").val($("#mHsoi").val());
            $("#pHdistrict").val($("#mHdistrict").val());
            $("#pHamphoe").val($("#mHamphoe").val());
            $("#pHprovince").val($("#mHprovince").val());
            $("#pHzipcode").val($("#mHzipcode").val());
            $("#pRelative").val("มารดา");
            //readonly
            $("#pCfname").prop('disabled', true);
            $("#pFname").prop('readonly', true);
            $("#pLname").prop('readonly', true);
            $("#pPIN").prop('readonly', true);
            $("#pRace").prop('readonly', true);
            $("#pNation").prop('readonly', true);
            $("#pReligion").prop('disabled', true);
            $("#pBirthday").prop('disabled', true);
            $("#pBirthmonth").prop('disabled', true);
            $("#pBirthyear").prop('disabled', true);
            $("#pOccu").prop('disabled', true);
            $("#pEarnings").prop('readonly', true);
            $("#pWorkplace").prop('readonly', true);
            $("#pWorkplaceTel").prop('readonly', true);
            $("#pTel").prop('readonly', true);
            $("#pMail").prop('readonly', true);
            $("#psameAddress").prop('disabled', true);
            $("#pHno").prop('readonly', true);
            $("#pHmoo").prop('readonly', true);
            $("#pHroad").prop('readonly', true);
            $("#pHsoi").prop('readonly', true);
            $("#pHdistrict").prop('readonly', true);
            $("#pHamphoe").prop('readonly', true);
            $("#pHprovince").prop('readonly', true);
            $("#pHzipcode").prop('readonly', true);
            $("#pRelative").prop('readonly', true);
        }
    },
    sParento: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sParento */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sParento */
            }
            return true;
        },
        onClick: () => {
            $("#pCfname").get(0).selectedIndex = 0;
            $("#pFname").val("");
            $("#pLname").val("");
            $("#pPIN").val("");
            $("#pRace").val("");
            $("#pNation").val("");
            $("#pReligion").get(0).selectedIndex = 0;
            $("#pBirthday").get(0).selectedIndex = 0;
            $("#pBirthmonth").get(0).selectedIndex = 0;
            $("#pBirthyear").get(0).selectedIndex = 0;
            $("#pOccu").get(0).selectedIndex = 0;
            $("#pEarnings").val("");
            $("#pWorkplace").val("");
            $("#pWorkplaceTel").val("");
            $("#pTel").val("");
            $("#pMail").val("");
            $("#psameAddress").prop('checked', false);
            $("#pHno").val("");
            $("#pHmoo").val("");
            $("#pHroad").val("");
            $("#pHsoi").val("");
            $("#pHdistrict").val("");
            $("#pHamphoe").val("");
            $("#pHprovince").val("");
            $("#pHzipcode").val("");
            $("#pRelative").val("");
            //clear readOnly
            $("#pCfname").prop('disabled', false);
            $("#pFname").prop('readonly', false);
            $("#pLname").prop('readonly', false);
            $("#pPIN").prop('readonly', false);
            $("#pRace").prop('readonly', false);
            $("#pNation").prop('readonly', false);
            $("#pReligion").prop('disabled', false);
            $("#pBirthday").prop('disabled', false);
            $("#pBirthmonth").prop('disabled', false);
            $("#pBirthyear").prop('disabled', false);
            $("#pOccu").prop('disabled', false);
            $("#pEarnings").prop('readonly', false);
            $("#pWorkplace").prop('readonly', false);
            $("#pWorkplaceTel").prop('readonly', false);
            $("#pTel").prop('readonly', false);
            $("#pMail").prop('readonly', false);
            $("#psameAddress").prop('disabled', false);
            $("#pHno").prop('readonly', false);
            $("#pHmoo").prop('readonly', false);
            $("#pHroad").prop('readonly', false);
            $("#pHsoi").prop('readonly', false);
            $("#pHzipcode").prop('readonly', false);
            $("#pRelative").prop('readonly', false);
        }
    },
    pCfname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pCfname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pFname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pFname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pLname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pLname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pPIN: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (!idCardCheck(element.value.replaceAll("-", "")))
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if (!idCardCheck(element.value.replaceAll("-", "")))
                    return false;
            }
            return true;
        },
        onClick: () => {
        }
    },
    pRace: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pRace */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pNation: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pNation */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pReligion: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for pReligion */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pBirthday: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for pBirthday */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pBirthmonth: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for pBirthmonth */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pBirthyear: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for pBirthyear */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pRelative: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pRelative */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pOccu: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for pOccu */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pEarnings: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pEarnings */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pWorkplace: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pWorkplace */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pWorkplaceTel: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll("-", "").length !== 9)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pWorkplaceTel */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pTel: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll("-", "").length !== 10)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pTel */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pMail: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pMail */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pHno: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for pHno */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pHno */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pHmoo: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for pHmoo */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pHmoo */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pHroad: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for pHroad */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pHroad */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pHsoi: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for pHsoi */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pHsoi */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pHdistrict: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pHdistrict */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pHamphoe: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pHamphoe */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pHprovince: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for pHprovince */
            }
            return true;
        },
        onClick: () => {
        }
    },
    pHzipcode: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length !== 5)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (element instanceof HTMLInputElement) {
                if (element.value.length == 5) {
                    let resultsContainer = $('#Presults');
                    let sAddress = "";
                    let sHtambon = "";
                    let sHamphoe = "";
                    let sHprovince = "";
                    let sHzipcode = element.value;
                    const data = yield fetch(`https://apply.pcshs.ac.th/Admission/register/searchtumbons?sHzipcode=${sHzipcode}`, {
                        method: "GET",
                    });
                    var results = (_a = (yield data.json())) !== null && _a !== void 0 ? _a : [];
                    resultsContainer.empty();
                    if (results.length > 0) {
                        resultsContainer.append('<div class="list-group-item result-header flex"><h6 class="m-0 d-flex justify-content-between">ผลการค้นหา <span>พบ ' + results.length + ' สถานที่</span></h6></div>');
                        results.forEach(function (result) {
                            var regex = new RegExp('(' + sHzipcode + ')', 'gi');
                            var sHzipcodeResult = result.sHzipcode.replace(regex, '<span class="highlight">$1</span>');
                            sHzipcodeResult = 'รหัสไปรษณีย์ ' + sHzipcodeResult;
                            if (result.sHprovince == "กรุงเทพมหานคร") {
                                sAddress = 'แขวง' + result.sHtambon + ' เขต' + result.sHamphoe + ' ' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            else {
                                sAddress = 'ต.' + result.sHtambon + ' อ.' + result.sHamphoe + ' จ.' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            sHtambon = "'" + result.sHtambon + "'";
                            sHamphoe = "'" + result.sHamphoe + "'";
                            sHprovince = "'" + result.sHprovince + "'";
                            sHzipcode = result.sHzipcode;
                            var listItem = $('<div></div>')
                                .addClass('list-group-item list-group-item-action');
                            var listItem2 = $('<div></div>')
                                .on("click", () => {
                                $("#pHdistrict").val(result.sHtambon);
                                $("#pHamphoe").val(result.sHamphoe);
                                $("#pHprovince").val(result.sHprovince);
                                $("#pHzipcode").val(result.sHzipcode);
                                resultsContainer.empty();
                            })
                                .addClass('row cursor-pointer');
                            var select = $('<div class="d-flex justify-content-center px-3"><img src="https://www.mytcas.com/img/i/i-yes.svg" alt="Yes Icon" width="24"></div>')
                                .addClass('');
                            var schools = $('<div></div>')
                                .addClass('col px-0');
                            var nameContainer = $('<div></div>')
                                .addClass('result-name')
                                .html(sHzipcodeResult);
                            var provinceContainer = $('<div></div>')
                                .addClass('result-province')
                                .html(sAddress);
                            schools.append(nameContainer, provinceContainer);
                            listItem2.append(select, schools);
                            listItem.append(listItem2);
                            resultsContainer.append(listItem);
                        });
                    }
                    else {
                        resultsContainer.append('<div class="list-group-item result-header"><h5 class="m-0 d-flex justify-content-between">ผลการค้นหา</h5></div>');
                        resultsContainer.append('<div class="list-group-item list-group-item-action">ไม่พบรหัสไปรษณีย์</div>');
                    }
                }
                else {
                    ["pHdistrict", "pHamphoe", "pHprovince"].forEach(id => {
                        $(`#${id}`).val("");
                    });
                }
            }
            return true;
        }),
        onClick: () => {
        }
    },
    sBloodType: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for sBloodType */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sPoison: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sPoison */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sPoison */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sDrug: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sDrug */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sDrug */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sFood: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sFood */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sFood */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sSick: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sSick */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sSick */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sDrugEat: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sDrugEat */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sDrugEat */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sSurgery: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sSurgery */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sSurgery */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sSickOther: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sSickOther */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sSickOther */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sSch: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sSch */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sSchprovince: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for sSchprovince */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sGPAm: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll(".", "").length !== 3)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sGPAm */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sGPAs: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll(".", "").length !== 3)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sGPAs */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sGPA: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll(".", "").length !== 3)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sGPA */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conNo: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for conNo */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conNo */
            }
            return true;
        },
        onClick: () => {
        }
    },
    sContractf: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sContractf */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sContractf */
            }
            return true;
        },
        onClick: () => {
            //validation all motherValue is not empty by OnValidation
            let isPass = true;
            ["mCfname", "mFname", "mLname", "mPIN", "mRace", "mNation", "mReligion", "mBirthday", "mBirthmonth", "mBirthyear", "mOccu", "mEarnings", "mWorkplace", "mWorkplaceTel", "mTel", "mMail", "msameAddress", "mHno", "mHmoo", "mHroad", "mHsoi", "mHdistrict", "mHamphoe", "mHprovince", "mHzipcode"].forEach(id => {
                var _a;
                if (allInput[id].onValidation((_a = document.getElementById(id)) !== null && _a !== void 0 ? _a : document.getElementById(id)) == false) {
                    isPass = false;
                }
            });
            //clear
            $("#conFname").get(0).selectedIndex = 0;
            $("#conFname").val("");
            $("#conLname").val("");
            $("#conPIN").val("");
            $("#conOccu").get(0).selectedIndex = 0;
            $("#conEarnings").val("");
            $("#conWorkplace").val("");
            $("#conWorkplaceTel").val("");
            $("#conTel").val("");
            $("#conMail").val("");
            $("#consameAddress").prop('checked', false);
            $("#conHno").val("");
            $("#conHmoo").val("");
            $("#conHroad").val("");
            $("#conHsoi").val("");
            $("#conHdistrict").val("");
            $("#conHamphoe").val("");
            $("#conHprovince").val("");
            $("#conHzipcode").val("");
            $("#conRelative").val("");
            if (!isPass) {
                return;
            }
            //clear readOnly
            $("#conCfname").prop('disabled', false);
            $("#conFname").prop('readonly', false);
            $("#conLname").prop('readonly', false);
            $("#conPIN").prop('readonly', false);
            $("#conOccu").prop('disabled', false);
            $("#conEarnings").prop('readonly', false);
            $("#conWorkplace").prop('readonly', false);
            $("#conWorkplaceTel").prop('readonly', false);
            $("#conTel").prop('readonly', false);
            $("#conMail").prop('readonly', false);
            $("#consameAddress").prop('disabled', false);
            $("#conHno").prop('readonly', false);
            $("#conHmoo").prop('readonly', false);
            $("#conHroad").prop('readonly', false);
            $("#conHsoi").prop('readonly', false);
            $("#conZipcode").prop('readonly', false);
            //val
            $("#conCfname").val($("#fCfname").val());
            $("#conFname").val($("#fFname").val());
            $("#conLname").val($("#fLname").val());
            $("#conPIN").val($("#fPIN").val());
            $("#conOccu").val($("#fOccu").val());
            $("#conEarnings").val($("#fEarnings").val());
            $("#conWorkplace").val($("#fWorkplace").val());
            $("#conWorkplaceTel").val($("#fWorkplaceTel").val());
            $("#conTel").val($("#fTel").val());
            $("#conMail").val($("#fMail").val());
            $("#consameAddress").prop('checked', $("#fsameAddress").prop('checked'));
            $("#conHno").val($("#fHno").val());
            $("#conHmoo").val($("#fHmoo").val());
            $("#conHroad").val($("#fHroad").val());
            $("#conHsoi").val($("#fHsoi").val());
            $("#conHdistrict").val($("#fHdistrict").val());
            $("#conHamphoe").val($("#fHamphoe").val());
            $("#conHprovince").val($("#fHprovince").val());
            $("#conHzipcode").val($("#fHzipcode").val());
            $("#conRelative").val("บิดา");
            //readonly
            $("#conCfname").prop('disabled', true);
            $("#conFname").prop('readonly', true);
            $("#conLname").prop('readonly', true);
            $("#conPIN").prop('readonly', true);
            $("#conOccu").prop('disabled', true);
            $("#conEarnings").prop('readonly', true);
            $("#conWorkplace").prop('readonly', true);
            $("#conWorkplaceTel").prop('readonly', true);
            $("#conTel").prop('readonly', true);
            $("#conMail").prop('readonly', true);
            $("#consameAddress").prop('disabled', true);
            $("#conHno").prop('readonly', true);
            $("#conHmoo").prop('readonly', true);
            $("#conHroad").prop('readonly', true);
            $("#conHsoi").prop('readonly', true);
            $("#conHdistrict").prop('readonly', true);
            $("#conHamphoe").prop('readonly', true);
            $("#conHprovince").prop('readonly', true);
            $("#conHzipcode").prop('readonly', true);
            $("#conRelative").prop('readonly', true);
        }
    },
    sContractm: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sContractm */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sContractm */
            }
            return true;
        },
        onClick: () => {
            //validation all motherValue is not empty by OnValidation
            let isPass = true;
            ["mCfname", "mFname", "mLname", "mPIN", "mRace", "mNation", "mReligion", "mBirthday", "mBirthmonth", "mBirthyear", "mOccu", "mEarnings", "mWorkplace", "mWorkplaceTel", "mTel", "mMail", "msameAddress", "mHno", "mHmoo", "mHroad", "mHsoi", "mHdistrict", "mHamphoe", "mHprovince", "mHzipcode"].forEach(id => {
                var _a;
                if (allInput[id].onValidation((_a = document.getElementById(id)) !== null && _a !== void 0 ? _a : document.getElementById(id)) == false) {
                    isPass = false;
                }
            });
            //clear
            $("#conFname").get(0).selectedIndex = 0;
            $("#conFname").val("");
            $("#conLname").val("");
            $("#conPIN").val("");
            $("#conOccu").get(0).selectedIndex = 0;
            $("#conEarnings").val("");
            $("#conWorkplace").val("");
            $("#conWorkplaceTel").val("");
            $("#conTel").val("");
            $("#conMail").val("");
            $("#consameAddress").prop('checked', false);
            $("#conHno").val("");
            $("#conHmoo").val("");
            $("#conHroad").val("");
            $("#conHsoi").val("");
            $("#conHdistrict").val("");
            $("#conHamphoe").val("");
            $("#conHprovince").val("");
            $("#conHzipcode").val("");
            $("#conRelative").val("");
            if (!isPass) {
                return;
            }
            //clear readOnly
            $("#conCfname").prop('disabled', false);
            $("#conFname").prop('readonly', false);
            $("#conLname").prop('readonly', false);
            $("#conPIN").prop('readonly', false);
            $("#conOccu").prop('disabled', false);
            $("#conEarnings").prop('readonly', false);
            $("#conWorkplace").prop('readonly', false);
            $("#conWorkplaceTel").prop('readonly', false);
            $("#conTel").prop('readonly', false);
            $("#conMail").prop('readonly', false);
            $("#consameAddress").prop('disabled', false);
            $("#conHno").prop('readonly', false);
            $("#conHmoo").prop('readonly', false);
            $("#conHroad").prop('readonly', false);
            $("#conHsoi").prop('readonly', false);
            $("#conZipcode").prop('readonly', false);
            //val
            $("#conCfname").val($("#mCfname").val());
            $("#conFname").val($("#mFname").val());
            $("#conLname").val($("#mLname").val());
            $("#conPIN").val($("#mPIN").val());
            $("#conOccu").val($("#mOccu").val());
            $("#conEarnings").val($("#mEarnings").val());
            $("#conWorkplace").val($("#mWorkplace").val());
            $("#conWorkplaceTel").val($("#mWorkplaceTel").val());
            $("#conTel").val($("#mTel").val());
            $("#conMail").val($("#mMail").val());
            $("#consameAddress").prop('checked', $("#msameAddress").prop('checked'));
            $("#conHno").val($("#mHno").val());
            $("#conHmoo").val($("#mHmoo").val());
            $("#conHroad").val($("#mHroad").val());
            $("#conHsoi").val($("#mHsoi").val());
            $("#conHdistrict").val($("#mHdistrict").val());
            $("#conHamphoe").val($("#mHamphoe").val());
            $("#conHprovince").val($("#mHprovince").val());
            $("#conHzipcode").val($("#mHzipcode").val());
            $("#conRelative").val("มารดา");
            //readonly
            $("#conCfname").prop('disabled', true);
            $("#conFname").prop('readonly', true);
            $("#conLname").prop('readonly', true);
            $("#conPIN").prop('readonly', true);
            $("#conOccu").prop('disabled', true);
            $("#conEarnings").prop('readonly', true);
            $("#conWorkplace").prop('readonly', true);
            $("#conWorkplaceTel").prop('readonly', true);
            $("#conTel").prop('readonly', true);
            $("#conMail").prop('readonly', true);
            $("#consameAddress").prop('disabled', true);
            $("#conHno").prop('readonly', true);
            $("#conHmoo").prop('readonly', true);
            $("#conHroad").prop('readonly', true);
            $("#conHsoi").prop('readonly', true);
            $("#conHdistrict").prop('readonly', true);
            $("#conHamphoe").prop('readonly', true);
            $("#conHprovince").prop('readonly', true);
            $("#conHzipcode").prop('readonly', true);
            $("#conRelative").prop('readonly', true);
        }
    },
    sContracto: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for sContracto */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for sContracto */
            }
            return true;
        },
        onClick: () => {
            $("#conFname").get(0).selectedIndex = 0;
            $("#conFname").val("");
            $("#conLname").val("");
            $("#conPIN").val("");
            $("#conOccu").get(0).selectedIndex = 0;
            $("#conEarnings").val("");
            $("#conWorkplace").val("");
            $("#conWorkplaceTel").val("");
            $("#conTel").val("");
            $("#conMail").val("");
            $("#consameAddress").prop('checked', false);
            $("#conHno").val("");
            $("#conHmoo").val("");
            $("#conHroad").val("");
            $("#conHsoi").val("");
            $("#conHdistrict").val("");
            $("#conHamphoe").val("");
            $("#conHprovince").val("");
            $("#conHzipcode").val("");
            $("#conRelative").val("");
            //clear readOnly
            $("#conCfname").prop('disabled', false);
            $("#conFname").prop('readonly', false);
            $("#conLname").prop('readonly', false);
            $("#conPIN").prop('readonly', false);
            $("#conOccu").prop('disabled', false);
            $("#conEarnings").prop('readonly', false);
            $("#conWorkplace").prop('readonly', false);
            $("#conWorkplaceTel").prop('readonly', false);
            $("#conTel").prop('readonly', false);
            $("#conMail").prop('readonly', false);
            $("#consameAddress").prop('disabled', false);
            $("#conHno").prop('readonly', false);
            $("#conHmoo").prop('readonly', false);
            $("#conHroad").prop('readonly', false);
            $("#conHsoi").prop('readonly', false);
            $("#conHzipcode").prop('readonly', false);
            $("#conRelative").prop('readonly', false);
        }
    },
    conCfname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conCfname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conFname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conFname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conLname: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conLname */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conPIN: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll("-", "").length !== 13)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                if (!idCardCheck(element.value.replaceAll("-", "")))
                    return false;
            }
            return true;
        },
        onClick: () => {
        }
    },
    conRelative: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conRelative */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conOccu: {
        type: "select",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLSelectElement) {
                if (element.selectedIndex == 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLSelectElement) {
                /* Add key change logic for conOccu */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conEarnings: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conEarnings */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conWorkplace: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conWorkplace */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conWorkplaceTel: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll("-", "").length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conWorkplaceTel */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conTel: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.replaceAll("-", "").length !== 10)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conTel */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conMail: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for conMail */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conMail */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conHno: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for conHno */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conHno */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conHmoo: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for conHmoo */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conHmoo */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conHroad: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for conHroad */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conHroad */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conHsoi: {
        type: "input",
        isRequired: false,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for conHsoi */
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conHsoi */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conHdistrict: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conHdistrict */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conHamphoe: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conHamphoe */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conHprovince: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length <= 0)
                    return false;
            }
            return true;
        },
        onKeyChange: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add key change logic for conHprovince */
            }
            return true;
        },
        onClick: () => {
        }
    },
    conHzipcode: {
        type: "input",
        isRequired: true,
        onValidation: (element) => {
            if (element instanceof HTMLInputElement) {
                /* Add validation logic for conHzipcode */
            }
            return true;
        },
        onKeyChange: (element) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (element instanceof HTMLInputElement) {
                if (element.value.length == 5) {
                    let resultsContainer = $('#conresults');
                    let sAddress = "";
                    let sHtambon = "";
                    let sHamphoe = "";
                    let sHprovince = "";
                    let sHzipcode = element.value;
                    const data = yield fetch(`https://apply.pcshs.ac.th/Admission/register/searchtumbons?sHzipcode=${sHzipcode}`, {
                        method: "GET",
                    });
                    var results = (_a = (yield data.json())) !== null && _a !== void 0 ? _a : [];
                    resultsContainer.empty();
                    if (results.length > 0) {
                        resultsContainer.append('<div class="list-group-item result-header flex"><h6 class="m-0 d-flex justify-content-between">ผลการค้นหา <span>พบ ' + results.length + ' สถานที่</span></h6></div>');
                        results.forEach(function (result) {
                            var regex = new RegExp('(' + sHzipcode + ')', 'gi');
                            var sHzipcodeResult = result.sHzipcode.replace(regex, '<span class="highlight">$1</span>');
                            sHzipcodeResult = 'รหัสไปรษณีย์ ' + sHzipcodeResult;
                            if (result.sHprovince == "กรุงเทพมหานคร") {
                                sAddress = 'แขวง' + result.sHtambon + ' เขต' + result.sHamphoe + ' ' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            else {
                                sAddress = 'ต.' + result.sHtambon + ' อ.' + result.sHamphoe + ' จ.' + result.sHprovince + ' ' + result.sHzipcode;
                            }
                            sHtambon = "'" + result.sHtambon + "'";
                            sHamphoe = "'" + result.sHamphoe + "'";
                            sHprovince = "'" + result.sHprovince + "'";
                            sHzipcode = result.sHzipcode;
                            var listItem = $('<div></div>')
                                .addClass('list-group-item list-group-item-action');
                            var listItem2 = $('<div></div>')
                                .on("click", () => {
                                $("#conHdistrict").val(result.sHtambon);
                                $("#conHamphoe").val(result.sHamphoe);
                                $("#conHprovince").val(result.sHprovince);
                                $("#conHzipcode").val(result.sHzipcode);
                                resultsContainer.empty();
                            })
                                .addClass('row cursor-pointer');
                            var select = $('<div class="d-flex justify-content-center px-3"><img src="https://www.mytcas.com/img/i/i-yes.svg" alt="Yes Icon" width="24"></div>')
                                .addClass('');
                            var schools = $('<div></div>')
                                .addClass('col px-0');
                            var nameContainer = $('<div></div>')
                                .addClass('result-name')
                                .html(sHzipcodeResult);
                            var provinceContainer = $('<div></div>')
                                .addClass('result-province')
                                .html(sAddress);
                            schools.append(nameContainer, provinceContainer);
                            listItem2.append(select, schools);
                            listItem.append(listItem2);
                            resultsContainer.append(listItem);
                        });
                    }
                    else {
                        resultsContainer.append('<div class="list-group-item result-header"><h5 class="m-0 d-flex justify-content-between">ผลการค้นหา</h5></div>');
                        resultsContainer.append('<div class="list-group-item list-group-item-action">ไม่พบรหัสไปรษณีย์</div>');
                    }
                }
                else {
                    ["conHdistrict", "conHamphoe", "conHprovince"].forEach(id => {
                        $(`#${id}`).val("");
                    });
                }
            }
            return true;
        }),
        onClick: () => {
        }
    },
};
const prefix = [
    "นาย",
    "นางสาว",
    "นาง",
    "พันอากาศเอก",
    "ร้อยตรีหญิง",
    "ร้อยโทหญิง",
    "ร้อยเอกหญิง",
    "ร้อยตำรวจตรีหญิง",
    "ร้อยตำรวจโทหญิง",
    "ร้อยตำรวจเอกหญิง",
    "เรืออากาศตรีหญิง",
    "เรืออากาศโทหญิง",
    "เรืออากาศเอกหญิง",
    "สิบตำรวจโทหญิง",
    "สิบตำรวจเอกหญิง",
    "พลเอก",
    "พลโท",
    "พลตรี",
    "พันเอก",
    "พันโท",
    "พันตรี",
    "ว่าที่พันตรี",
    "ร้อยเอก",
    "ว่าที่ร้อยเอก",
    "ร้อยโท",
    "ว่าที่ร้อยโท",
    "ร้อยตรี",
    "ว่าที่ร้อยตรี",
    "จ่าสิบเอก",
    "จ่าสิบโท",
    "จ่าสิบตรี",
    "สิบเอก",
    "สิบโท",
    "สิบตรี",
    "พลจัตวา",
    "พลเรือเอก",
    "พลเรือโท",
    "พลเรือตรี",
    "นาวาเอก",
    "นาวาโท",
    "นาวาตรี",
    "ว่าที่นาวาตรี",
    "เรือเอก",
    "ว่าที่เรือเอก",
    "เรือโท",
    "ว่าที่เรือโท",
    "เรือตรี",
    "ว่าที่เรือตรี",
    "พันจ่าเอก",
    "พันจ่าโท",
    "พันจ่าตรี",
    "จ่าเอก",
    "จ่าโท",
    "จ่าตรี",
    "นักเรียนจ่าทหารเรือ",
    "พลเรือจัตวา",
    "พลอากาศเอก",
    "พลอากาศโท",
    "พลอากาศตรี",
    "นาวาอากาศเอก",
    "นาวาอากาศโท",
    "นาวาอากาศตรี",
    "ว่าที่นาวาอากาศตรี",
    "เรืออากาศเอก",
    "ว่าที่เรืออากาศเอก",
    "เรืออากาศโท",
    "ว่าที่เรืออากาศโท",
    "เรืออากาศตรี",
    "ว่าที่เรืออากาศตรี",
    "พันจ่าอากาศเอก",
    "พันจ่าอากาศโท",
    "พันจ่าอากาศตรี",
    "จ่าอากาศเอก",
    "จ่าอากาศโท",
    "จ่าอากาศตรี",
    "พลอากาศจัตวา",
    "พลตำรวจเอก",
    "ว่าที่พลตำรวจเอก",
    "พลตำรวจโท",
    "ว่าที่พลตำรวจโท",
    "พลตำรวจตรี",
    "ว่าที่พลตำรวจตรี",
    "พลตำรวจจัตวา",
    "ว่าที่พลตำรวจจัตวา",
    "พันตำรวจเอก",
    "ว่าที่พันตำรวจเอก",
    "พันตำรวจโท",
    "ว่าที่พันตำรวจโท",
    "พันตำรวจตรี",
    "ว่าที่พันตำรวจตรี",
    "ร้อยตำรวจเอก",
    "ว่าที่ร้อยตำรวจเอก",
    "ร้อยตำรวจโท",
    "ว่าที่ร้อยตำรวจโท",
    "ร้อยตำรวจตรี",
    "ว่าที่ร้อยตำรวจตรี",
    "ดาบตำรวจ",
    "จ่าสิบตำรวจ",
    "สิบตำรวจเอก",
    "สิบตำรวจโท",
    "สิบตำรวจตรี",
    "นายกองใหญ่",
    "นายกองเอก",
    "นายกองโท",
    "นายกองตรี",
    "นายหมวดเอก",
    "นายหมวดโท",
    "นายหมวดตรี",
    "นายหมู่ใหญ่",
    "นายหมู่เอก",
    "นายหมู่โท",
    "นายหมู่ตรี",
    "นักเรียนช่างฝีมือทหาร",
    "นาวาเอกหญิง",
    "นาวาโทหญิง",
    "นาวาตรีหญิง",
    "เรือเอกหญิง",
    "เรือโทหญิง",
    "เรือตรีหญิง",
    "พันจ่าเอกหญิง",
    "พันจ่าโทหญิง",
    "พันจ่าตรีหญิง",
    "จ่าเอกหญิง",
    "จ่าโทหญิง",
    "จ่าตรีหญิง",
    "นาวาอากาศหญิง",
    "ว่าที่ร้อยตรีหญิง",
    "นักเรียนช่างกรมอู่ทหารเรือ",
    "นักเรียนดุริยางค์ทหารเรือ",
    "จ่าสิบตรีหญิง",
    "จ่าสิบเอกหญิง",
    "จ่าอากาศตรีหญิง",
    "จ่าอากาศเอกหญิง",
    "ดาบตำรวจหญิง",
    "นาวาอากาศตรีหญิง",
    "นาวาอากาศโทหญิง",
    "นาวาอากาศเอกหญิง",
    "พลตรีหญิง",
    "พันจ่าอากาศตรีหญิง",
    "พันจ่าอากาศเอกหญิง",
    "พันตรีหญิง",
    "พันโทหญิง",
    "พันเอกหญิง",
    "พันตำรวจตรีหญิง",
    "พันตำรวจโทหญิง",
    "พันตำรวจเอกหญิง",
    "สิบโทหญิง",
    "จ่าอากาศโทหญิง"
];
Object.keys(allInput).forEach((id) => __awaiter(void 0, void 0, void 0, function* () {
    const checkData = document.getElementById(id);
    checkData.addEventListener("keyup", (ev) => __awaiter(void 0, void 0, void 0, function* () {
        const checked = yield allInput[id].onKeyChange(checkData);
        if (!checked) {
            const element = document.getElementById(id);
            if (element instanceof HTMLInputElement) {
                $('label[for="' + `${id}` + '"] span').text(`*กรอก${element.placeholder}`);
            }
        }
        else if (defaultErr.has(id)) {
            $('label[for="' + `${id}` + '"] span').text(`${defaultErr.get(id)}`);
        }
    }));
    checkData.addEventListener("change", (ev) => __awaiter(void 0, void 0, void 0, function* () {
        const checked = yield allInput[id].onKeyChange(checkData);
        if (!checked) {
            const element = document.getElementById(id);
            if (element instanceof HTMLSelectElement) {
                $('label[for="' + `${id}` + '"] span').text(`*เลือก${$('label[for="' + `${id}` + '"]').get(0).innerText.split(" ")[0]}`);
            }
        }
        else if (defaultErr.has(id)) {
            $('label[for="' + `${id}` + '"] span').text(`${defaultErr.get(id)}`);
        }
    }));
    checkData.addEventListener("click", (ev) => {
        allInput[id].onClick(ev.currentTarget);
    });
}));
const validation = new Map();
if (defaultErr.size == 0) {
    Object.keys(allInput).forEach(id => {
        defaultErr.set(id, $('label[for="' + `${id}` + '"] span').text());
    });
}
const doc = document.createElement("option");
doc.value = "โปรดเลือก";
doc.innerText = "โปรดเลือก";
doc.disabled = true;
doc.selected = true;
const doc2 = doc.cloneNode(true);
const doc3 = doc.cloneNode(true);
const doc4 = doc.cloneNode(true);
doc2.selected = true;
doc3.selected = true;
doc4.selected = true;
document.getElementById("fCfname").appendChild(doc);
document.getElementById("mCfname").appendChild(doc2);
document.getElementById("pCfname").appendChild(doc3);
document.getElementById("conCfname").appendChild(doc4);
prefix.forEach((val) => {
    const doc = document.createElement("option");
    doc.value = val;
    doc.innerText = val;
    const doc2 = doc.cloneNode(true);
    const doc3 = doc.cloneNode(true);
    const doc4 = doc.cloneNode(true);
    document.getElementById("fCfname").appendChild(doc);
    document.getElementById("mCfname").appendChild(doc2);
    document.getElementById("pCfname").appendChild(doc3);
    document.getElementById("conCfname").appendChild(doc4);
});
Object.keys(allInput).forEach((id, i) => __awaiter(void 0, void 0, void 0, function* () {
    const checkData = allInput[id];
    if (checkData.isRequired) {
        const data = yield checkData.onValidation(document.getElementById(id));
        validation.set(id, data);
    }
}));
document.getElementById("submit-form").addEventListener("click", () => {
    Object.keys(allInput).forEach((id, i) => __awaiter(void 0, void 0, void 0, function* () {
        const checkData = allInput[id];
        if (checkData.isRequired) {
            const data = yield checkData.onValidation(document.getElementById(id));
            validation.set(id, data);
        }
    }));
});
document.getElementById("submit-form").addEventListener("click", (ev) => {
    if (!Array.from(validation).map(x => x[1]).some(x => x == false)) {
        const allElement = document.getElementsByTagName("*");
        for (let i = 0; i < allElement.length; i++) {
            try {
                if (allElement.item(i).disabled && allElement.item(i).disabled == true) {
                    allElement.item(i).disabled = false;
                }
            }
            catch (e) { }
        }
        const formData = new FormData(document.getElementById("info-form"));
        console.log(formData.get("conOccu"));
    }
    else {
        let isF = false;
        Array.from(validation).forEach((value, i) => {
            const { id, success, element } = { id: value[0], success: value[1], element: document.getElementById(value[0]) };
            if (value[1] == false) {
                if (!isF) {
                    element.focus({ preventScroll: false });
                    isF = true;
                }
                if (element instanceof HTMLInputElement) {
                    $('label[for="' + `${id}` + '"] span').text(`*กรอก${element.placeholder}`);
                }
                else if (element instanceof HTMLSelectElement) {
                    $('label[for="' + `${id}` + '"] span').text(`*เลือก${$('label[for="' + `${id}` + '"]').get(0).innerText.split(" ")[0]}`);
                }
            }
            else {
                if (element instanceof HTMLInputElement) {
                    $('label[for="' + `${id}` + '"] span').text(`${defaultErr.get(id)}`);
                }
                else if (element instanceof HTMLSelectElement) {
                    $('label[for="' + `${id}` + '"] span').text(`${defaultErr.get(id)}`);
                }
            }
        });
    }
});
function addressSelect(ID, sHzipcode, sHtambon, sHamphoe, sHprovince, prefix, linked) {
    var resultsContainer = $(`#Sresults${prefix}`);
    if (document.getElementById(`sameAddress${prefix}`) !== null) {
        $(`#sameAddress${prefix}`).get(0).disabled = false;
        $(`#fsameAddress`).get(0).disabled = false;
        $(`#msameAddress`).get(0).disabled = false;
        $(`#sPsamef`).get(0).disabled = false;
    }
    $(`#sHzipcode${prefix}`).val(sHzipcode);
    $(`#sHdistrict${prefix}`).val(sHtambon);
    $(`#sHamphoe${prefix}`).val(sHamphoe);
    $(`#sHprovince${prefix}`).val(sHprovince);
    if (linked) {
        if ($(`#sameAddress${prefix}`).get(0).checked) {
            addressLinkS([`sHno${linked}`, `sHmoo${linked}`, `sHroad${linked}`, `sHzipcode${linked}`, `sHdistrict${linked}`, `sHsoi${linked}`, `sHamphoe${linked}`, `sHprovince${linked}`], [`sHno${prefix}`, `sHmoo${prefix}`, `sHroad${prefix}`, `sHzipcode${prefix}`, `sHdistrict${prefix}`, `sHsoi${prefix}`, `sHamphoe${prefix}`, `sHprovince${prefix}`]);
        }
    }
    resultsContainer.empty();
}
function addressLinkS(item, item2) {
    item2.forEach((it, i) => {
        $(`#` + item[i]).val($(`#` + it).val());
    });
}
function idCardCheck(id_card) {
    if (!Number(id_card))
        return false;
    if (id_card.substring(0, 1) === 0)
        return false;
    if (id_card.length !== 13)
        return false;
    let sum = 0;
    for (let i = 0; i < 12; i++)
        sum += parseFloat(id_card.charAt(i)) * (13 - i);
    return (11 - sum % 11) % 10 === parseFloat(id_card.charAt(12));
}
//# sourceMappingURL=index.js.map