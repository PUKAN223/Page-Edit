<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/typescript@5.3.3"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/text-typescript@1.3.0"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <div class="card-body p-3 row justify-content-center">

        <div class="col-12 col-xl-11">
            <!-- <form action="api/insert_tb_std.php" method="post"> -->
            <form id="info-form">
                <h5 class="text-bold py-3">
                    ข้อมูลทั่วไปของนักเรียน
                </h5>
                <div class="row">

                    <div class="mb-3 col-12 col-xl-2">
                        <label for="sCfname" class="form-label">คำนำหน้า <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control" id="sCfname" name="sCfname">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="เด็กชาย">เด็กชาย</option>
                            <option value="เด็กหญิง">เด็กหญิง</option>
                            <option value="นาย">นาย</option>
                            <option value="นางสาว">นางสาว</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-5">
                        <label for="sFname" class="form-label">ชื่อภาษาไทย <span class="impotant text-danger">*
                                ไม่ต้องระบุคำนำหน้าชื่อ</span></label>
                        <input type="text" class="form-control" id="sFname" name="sFname" autocomplete="off"
                            placeholder="ชื่อภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-5">
                        <label for="sLname" class="form-label">นามสกุลภาษาไทย <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sLname" name="sLname" autocomplete="off"
                            placeholder="นามสกุลภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="sFnameENG" class="form-label">ชื่อภาษาอังกฤษ <span class="impotant text-danger">*
                                ไม่ต้องระบุคำนำหน้าชื่อ</span></label>
                        <input type="text" class="form-control name" id="sFnameENG" name="sFnameENG" autocomplete="off"
                            placeholder="ชื่อภาษาอังกฤษ">
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="sLnameENG" class="form-label">นามสกุลภาษาอังกฤษ
                            <span class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control name" id="sLnameENG" name="sLnameENG" autocomplete="off"
                            placeholder="นามสกุลภาษาอังกฤษ">
                    </div>
                    <div class="mb-3 col-12 col-xl-12">
                        <label for="sPIN" class="form-label">เลขประจำตัวประชาชน <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control PIN" id="sPIN" name="sPIN" autocomplete="off"
                            placeholder="X-XXXX-XXXXX-XX-X" value="1800901443779" readOnly>

                    </div>
                    <div class="mb-3 col-12 col-xl-12">
                        <label for="sPassport" class="form-label">เลขหนังสือเดินทางประเทศไทย
                            (ถ้ามี)</label>
                        <input type="text" class="form-control" id="sPassport" name="sPassport" autocomplete="off"
                            placeholder="เลขหนังสือเดินทางประเทศไทย (ถ้ามี)">

                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sRace" class="form-label">เชื้อชาติ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sRace" name="sRace" autocomplete="off"
                            placeholder="เชื้อชาติ">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sNation" class="form-label">สัญชาติ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sNation" name="sNation" value="ไทย"
                            autocomplete="off" placeholder="สัญชาติ" readonly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sReligion" class="form-label">ศาสนา <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control" id="sReligion" name="sReligion">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="พุทธ">พุทธ</option>
                            <option value="คริสต์">คริสต์</option>
                            <option value="อิสลาม">อิสลาม</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                            <option value="ไม่นับถือศาสนา">ไม่นับถือศาสนา</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="sBirthday" class="form-label">เกิดเมื่อวันที่ <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control" id="sBirthday" name="sBirthday" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <?php
                            for ($x = 1; $x <= 31; $x++) {
                                echo '<option value="' . $x . '">' . $x . '</option>';
                            }
                            ?>

                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="sBirthmonth" class="form-label">เดือน <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control" id="sBirthmonth" name="sBirthmonth" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="มกราคม">มกราคม</option>
                            <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                            <option value="มีนาคม">มีนาคม</option>
                            <option value="เมษายน">เมษายน</option>
                            <option value="พฤษภาคม">พฤษภาคม</option>
                            <option value="มิถุนายน">มิถุนายน</option>
                            <option value="กรกฎาคม">กรกฎาคม</option>
                            <option value="สิงหาคม">สิงหาคม</option>
                            <option value="กันยายน">กันยายน</option>
                            <option value="ตุลาคม">ตุลาคม</option>
                            <option value="พฤศจิกายน">พฤศจิกายน</option>
                            <option value="ธันวาคม">ธันวาคม</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="sBirthyear" class="form-label">พ.ศ. <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control" id="sBirthyear" name="sBirthyear" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <?php
                            for ($x = 2545; $x <= 2565; $x++) {
                                echo '<option value="' . $x . '">' . $x . '</option>';
                            }
                            ?>

                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sTel" class="form-label">เบอร์โทรศัพท์มือถือที่ติดต่อได้
                            (ถ้ามี)</label>
                        <input type="text" class="form-control Tel" id="sTel" name="sTel" autocomplete="off"
                            placeholder="0XX-XXX-XXXX" mask="000-000-0000">
                    </div>
                    <div class="mb-3 col-12 col-xl-9">
                        <label for="sMail" class="form-label">อีเมล์ (ถ้ามี)</label>
                        <input type="email" class="form-control" id="sMail" name="sMail" autocomplete="off"
                            placeholder="อีเมล์ (ถ้ามี)">
                    </div>
                </div>

                <h5 class="text-bold py-3">
                    ที่อยู่ตามทะเบียนบ้านของนักเรียน
                </h5>
                <div class="row">
                    <div class="mb-3 col-12 col-xl-2">
                        <label for="sHno" class="form-label">บ้านเลขที่ <span
                                class="impotant text-danger"></span></label>
                        <input type="text" class="form-control" id="sHno" name="sHno" autocomplete="off"
                            placeholder="บ้านเลขที่">
                    </div>
                    <div class="mb-3 col-12 col-xl-2">
                        <label for="sHmoo" class="form-label">หมู่ที่ <span class="impotant text-danger"></span></label>
                        <input type="text" class="form-control" id="sHmoo" name="sHmoo" autocomplete="off"
                            placeholder="หมู่ที่">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="sHroad" class="form-label">ถนน</label>
                        <input type="text" class="form-control" id="sHroad" name="sHroad" autocomplete="off"
                            placeholder="ถนน">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="sHsoi" class="form-label">ตรอก/ซอย</label>
                        <input type="text" class="form-control" id="sHsoi" name="sHsoi" autocomplete="off"
                            placeholder="ตรอก/ซอย">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sHdistrict" class="form-label">ตำบล/แขวง <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sHdistrict" name="sHdistrict" autocomplete="off"
                            placeholder="ตำบล/แขวง" readonly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sHamphoe" class="form-label">อำเภอ/เขต <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sHamphoe" name="sHamphoe" autocomplete="off"
                            placeholder="อำเภอ/เขต" readonly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sHprovince" class="form-label">จังหวัด <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sHprovince" name="sHprovince" autocomplete="off"
                            placeholder="จังหวัด" readonly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sHzipcode" class="form-label">รหัสไปรษณีย์ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control zipcode" id="sHzipcode" name="sHzipcode"
                            autocomplete="off" placeholder="รหัสไปรษณีย์">
                    </div>
                    <div id="Sresults" class="list-group mt-10"></div>

                </div>
                <h5 class="text-bold py-3">
                    ที่อยู่ปัจจุบันที่สามารถติดต่อได้ของนักเรียน
                </h5>


                <span class="py-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="sameAddress" name="sameAddress"
                            value="ที่อยู่ตามทะเบียนบ้าน" disabled>
                        <label class="form-check-label" for="sameAddress">ใช้ที่อยู่ตามทะเบียนบ้าน</label>
                    </div>
                </span>

                <div class="row pt-3">
                    <div class="mb-3 col-12 col-xl-2">
                        <label for="sHnoNow" class="form-label">บ้านเลขที่ <span
                                class="impotant text-danger"></span></label>
                        <input type="text" class="form-control" id="sHnoNow" name="sHnoNow" autocomplete="off"
                            placeholder="บ้านเลขที่">
                    </div>
                    <div class="mb-3 col-12 col-xl-2">
                        <label for="sHmooNow" class="form-label">หมู่ที่ <span
                                class="impotant text-danger"></span></label>
                        <input type="text" class="form-control" id="sHmooNow" name="sHmooNow" autocomplete="off"
                            placeholder="หมู่ที่">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="sHroadNow" class="form-label">ถนน</label>
                        <input type="text" class="form-control" id="sHroadNow" name="sHroadNow" autocomplete="off"
                            placeholder="ถนน">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="sHsoiNow" class="form-label">ตรอก/ซอย</label>
                        <input type="text" class="form-control" id="sHsoiNow" name="sHsoiNow" autocomplete="off"
                            placeholder="ตรอก/ซอย">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sHdistrictNow" class="form-label">ตำบล/แขวง <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sHdistrictNow" name="sHdistrictNow"
                            autocomplete="off" placeholder="ตำบล/แขวง" readonly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sHamphoeNow" class="form-label">อำเภอ/เขต <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sHamphoeNow" name="sHamphoeNow" autocomplete="off"
                            placeholder="อำเภอ/เขต" readonly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sHprovinceNow" class="form-label">จังหวัด <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sHprovinceNow" name="sHprovinceNow"
                            autocomplete="off" placeholder="จังหวัด" readonly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sHzipcodeNow" class="form-label">รหัสไปรษณีย์ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control zipcode" id="sHzipcodeNow" name="sHzipcodeNow"
                            autocomplete="off" placeholder="รหัสไปรษณีย์">
                    </div>

                    <div id="SresultsNow" class="list-group mt-10"></div>
                </div>

                <h5 class="text-bold py-3">
                    ข้อมูลบิดา
                </h5>
                <span class="py-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="fLiving" name="fdata" value="บิดามีชีวิตอยู่"
                            checked>
                        <label class="form-check-label" for="fLiving">บิดามีชีวิตอยู่</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="fLivingNotKnow" name="fdata"
                            value="บิดามีชีวิตอยู่ (ไม่ทราบข้อมูลแน่ชัด)" onclick="fatherDeceased()">
                        <label class="form-check-label" for="fLivingNotKnow">บิดามีชีวิตอยู่
                            (ไม่ทราบข้อมูลแน่ชัด)</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="fDeceased" name="fdata" value="บิดาถึงแก่กรรม"
                            onclick="fatherDeceased()">
                        <label class="form-check-label" for="fDeceased">บิดาถึงแก่กรรม</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="fNotKnow" name="fdata"
                            value="ไม่ทราบข้อมูลบิดา" onclick="fatherNotKnow()">
                        <label class="form-check-label" for="fNotKnow">ไม่ทราบข้อมูลบิดา</label>
                    </div>

                </span>


                <div class="row pt-3">
                    <div class="mb-3 col-12 col-xl-12 f-form">
                        <label for="fCfname" class="form-label">คำนำหน้าบิดา <span class="impotant text-danger">*
                                (หากใช้ตำแหน่งทางวิชาการ/ยศ ให้ระบุคำเต็มงดใช้คำย่อ เช่น
                                รองศาสตราจารย์
                                ร้อยตำรวจเอก)</span></label>
                        <select class="form-control imfatherdata" id="fCfname" name="fCfname">
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-6 f-form">
                        <label for="fFname" class="form-label">ชื่อบิดาภาษาไทย <span class="impotant text-danger">*
                                ไม่ต้องระบุคำนำหน้าชื่อ</span></label>
                        <input type="text" class="form-control fNotKnow" id="fFname" name="fFname" autocomplete="off"
                            placeholder="ชื่อบิดาภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-6 f-form">
                        <label for="fLname" class="form-label">นามสกุลบิดาภาษาไทย <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control fNotKnow" id="fLname" name="fLname" autocomplete="off"
                            placeholder="นามสกุลบิดาภาษาไทย">
                    </div>

                    <div class="mb-3 col-12 col-xl-12 f-form">
                        <label for="fPIN" class="form-label">เลขประจำตัวประชาชน <span
                                class="impotant imfPIN text-danger">*</span></label>
                        <input type="text" class="form-control PIN fNotKnow" id="fPIN" name="fPIN" autocomplete="off"
                            placeholder="X-XXXX-XXXXX-XX-X">

                    </div>
                </div>
                <div class="row fatherDeceased">
                    <div class="mb-3 col-12 col-xl-3 f-form">
                        <label for="fRace" class="form-label">เชื้อชาติ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control imfatherdata" id="fRace" name="fRace" autocomplete="off"
                            placeholder="เชื้อชาติ">
                    </div>
                    <div class="mb-3 col-12 col-xl-3 f-form">
                        <label for="fNation" class="form-label">สัญชาติ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control imfatherdata" id="fNation" name="fNation"
                            autocomplete="off" placeholder="สัญชาติ">
                    </div>
                    <div class="mb-3 col-12 col-xl-3 f-form">
                        <label for="fReligion" class="form-label">ศาสนา <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control imfatherdata" id="fReligion" name="fReligion">
                            <option disabled>โปรดเลือก</option>
                            <option selected value="พุทธ">พุทธ</option>
                            <option value="คริสต์">คริสต์</option>
                            <option value="อิสลาม">อิสลาม</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                            <option value="ไม่นับถือศาสนา">ไม่นับถือศาสนา</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4 f-form">
                        <label for="fBirthday" class="form-label">เกิดเมื่อวันที่ <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control imfatherdata" id="fBirthday" name="fBirthday" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <?php
                            for ($x = 1; $x <= 31; $x++) {
                                echo '<option value="' . $x . '">' . $x . '</option>';
                            }
                            ?>

                        </select>
                    </div>

                    <div class="mb-3 col-12 col-xl-4 f-form">
                        <label for="fBirthmonth" class="form-label">เดือน <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control imfatherdata" id="fBirthmonth" name="fBirthmonth"
                            autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="มกราคม">มกราคม</option>
                            <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                            <option value="มีนาคม">มีนาคม</option>
                            <option value="เมษายน">เมษายน</option>
                            <option value="พฤษภาคม">พฤษภาคม</option>
                            <option value="มิถุนายน">มิถุนายน</option>
                            <option value="กรกฎาคม">กรกฎาคม</option>
                            <option value="สิงหาคม">สิงหาคม</option>
                            <option value="กันยายน">กันยายน</option>
                            <option value="ตุลาคม">ตุลาคม</option>
                            <option value="พฤศจิกายน">พฤศจิกายน</option>
                            <option value="ธันวาคม">ธันวาคม</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4 f-form">
                        <label for="fBirthyear" class="form-label">พ.ศ. <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control imfatherdata" id="fBirthyear" name="fBirthyear" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <?php
                            for ($x = 2485; $x <= 2550; $x++) {
                                echo '<option value="' . $x . '">' . $x . '</option>';
                            }
                            ?>

                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4 f-form">
                        <label for="fOccu" class="form-label">อาชีพ <span class="impotant text-danger">*</span></label>
                        <select class="form-control imfatherdata" id="fOccu" name="fOccu" autocomplete="off">
                            <option disabled>โปรดเลือก</option>
                            <option selected value="ว่างงาน">ว่างงาน</option>
                            <option value="พ่อบ้าน/แม่บ้าน">พ่อบ้าน/แม่บ้าน</option>
                            <option value="บวช">บวช</option>
                            <option value="อาชีพอิสระ/รับจ้างทั่วไป">
                                อาชีพอิสระ/รับจ้างทั่วไป</option>
                            <option value="ช่างฝีมือ">ช่างฝีมือ</option>
                            <option value="เกษตรกร">เกษตรกร</option>
                            <option value="ค้าขาย">ค้าขาย</option>
                            <option value="เจ้าของกิจการ/ธุรกิจส่วนตัว">
                                เจ้าของกิจการ/ธุรกิจส่วนตัว</option>
                            <option value="อาจารย์">อาจารย์</option>
                            <option value="แพทย์/พยาบาล">แพทย์/พยาบาล</option>
                            <option value="พนักงานบริษัท">พนักงานบริษัท</option>
                            <option value="พนักงานรัฐวิสาหกิจ">พนักงานรัฐวิสาหกิจ
                            </option>
                            <option value="พนักงานรัฐวิสาหกิจบำนาญ">
                                พนักงานรัฐวิสาหกิจบำนาญ</option>
                            <option value="พนักงานราชการ">พนักงานราชการ</option>
                            <option value="ลูกจ้างส่วนราชการ">ลูกจ้างส่วนราชการ</option>
                            <option value="ข้าราชการ">ข้าราชการ</option>
                            <option value="ข้าราชการบำนาญ">ข้าราชการบำนาญ</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4 f-form">
                        <label for="fEarnings" class="form-label">รายได้ต่อเดือน
                            (บาท)</label>
                        <input type="text" class="form-control fatherdata money" id="fEarnings" name="fEarnings"
                            autocomplete="off" placeholder="รายได้ต่อเดือน (บาท)">
                    </div>
                    <div class="mb-3 col-12 col-xl-9 f-form">
                        <label for="fWorkplace" class="form-label">สถานที่ทำงาน</label>
                        <input type="text" class="form-control fatherdata" id="fWorkplace" name="fWorkplace"
                            autocomplete="off" placeholder="สถานที่ทำงาน">
                    </div>
                    <div class="mb-3 col-12 col-xl-3 f-form">
                        <label for="fWorkplaceTel" class="form-label">เบอร์โทรศัพท์ที่ทำงาน
                            (ถ้ามี)</label>
                        <input type="text" class="form-control fatherdata HTel" id="fWorkplaceTel" name="fWorkplaceTel"
                            autocomplete="off" placeholder="0XX-XXX-XXX">
                    </div>
                    <div class="mb-3 col-12 col-xl-3 f-form">
                        <label for="fTel" class="form-label">เบอร์โทรศัพท์มือถือที่ติดต่อได้
                            (ถ้ามี)</label>
                        <input type="text" class="form-control fatherdata Tel" id="fTel" name="fTel" autocomplete="off"
                            placeholder="0XX-XXX-XXXX">
                    </div>
                    <div class="mb-3 col-12 col-xl-9 f-form">
                        <label for="fMail" class="form-label">อีเมล์ (ถ้ามี)</label>
                        <input type="email" class="form-control fatherdata" id="fMail" name="fMail" autocomplete="off"
                            placeholder="อีเมล์ (ถ้ามี)">
                    </div>
                    <div>
                        <h5 class="text-bold py-3">
                            ที่อยู่ปัจจุบันที่สามารถติดต่อได้ของบิดา
                        </h5>
                        <span class="py-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="fsameAddress" name="fsameAddress"
                                    value="ใช้ที่อยู่ปัจจุบันตามนักเรียน" disabled>
                                <label class="form-check-label" for="fsameAddress">ใช้ที่อยู่ปัจจุบันตามนักเรียน</label>
                            </div>
                        </span>
                    </div>
                    <div class="row pt-3">
                        <div class="mb-3 col-12 col-xl-2">
                            <label for="fHno" class="form-label">บ้านเลขที่ <span
                                    class="impotant text-danger"></span></label>
                            <input type="text" class="form-control imfatherdata fatherDeceased" id="fHno" name="fHno"
                                autocomplete="off" placeholder="บ้านเลขที่">
                        </div>
                        <div class="mb-3 col-12 col-xl-2">
                            <label for="fHmoo" class="form-label">หมู่ที่ <span
                                    class="impotant text-danger"></span></label>
                            <input type="text" class="form-control imfatherdata fatherDeceased" id="fHmoo" name="fHmoo"
                                autocomplete="off" placeholder="หมู่ที่">
                        </div>
                        <div class="mb-3 col-12 col-xl-4 fatherDeceased">
                            <label for="fHroad" class="form-label">ถนน</label>
                            <input type="text" class="form-control fatherdata fatherDeceased" id="fHroad" name="fHroad"
                                autocomplete="off" placeholder="ถนน">
                        </div>
                        <div class="mb-3 col-12 col-xl-4 fatherDeceased">
                            <label for="fHsoi" class="form-label">ตรอก/ซอย</label>
                            <input type="text" class="form-control fatherdata fatherDeceased" id="fHsoi" name="fHsoi"
                                autocomplete="off" placeholder="ตรอก/ซอย">
                        </div>
                        <div class="mb-3 col-12 col-xl-3">
                            <label for="fHdistrict" class="form-label">ตำบล/แขวง <span
                                    class="impotant text-danger">*</span></label>
                            <input type="text" class="form-control" id="fHdistrict" name="fHdistrict" autocomplete="off"
                                placeholder="ตำบล/แขวง" readonly>
                        </div>
                        <div class="mb-3 col-12 col-xl-3">
                            <label for="fHamphoe" class="form-label">อำเภอ/เขต <span
                                    class="impotant text-danger">*</span></label>
                            <input type="text" class="form-control" id="fHamphoe" name="fHamphoe" autocomplete="off"
                                placeholder="อำเภอ/เขต" readonly>
                        </div>
                        <div class="mb-3 col-12 col-xl-3">
                            <label for="fHprovince" class="form-label">จังหวัด <span
                                    class="impotant text-danger">*</span></label>
                            <input type="text" class="form-control" id="fHprovince" name="fHprovince" autocomplete="off"
                                placeholder="จังหวัด" readonly>
                        </div>
                        <div class="mb-3 col-12 col-xl-3">
                            <label for="fHzipcode" class="form-label">รหัสไปรษณีย์ <span
                                    class="impotant text-danger">*</span></label>
                            <input type="text" class="form-control zipcode fatherDeceased" id="fHzipcode"
                                name="fHzipcode" autocomplete="off" placeholder="รหัสไปรษณีย์">
                        </div>
                        <div id="Fresults" class="list-group mt-10"></div>
                    </div>
                </div>



                <h5 class="text-bold py-3">
                    ข้อมูลมารดา
                </h5>
                <span class="py-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="mLiving" name="mdata" value="มารดามีชีวิตอยู่"
                            onclick="motherLiving()" checked>
                        <label class="form-check-label" for="mLiving">มารดามีชีวิตอยู่</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="mLivingNotKnow" name="mdata"
                            value="มารดามีชีวิตอยู่ (ไม่ทราบข้อมูลแน่ชัด)" onclick="motherDeceased()">
                        <label class="form-check-label" for="mDeceased">มารดามีชีวิตอยู่ (ไม่ทราบข้อมูลแน่ชัด)</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="mDeceased" name="mdata" value="มารดาถึงแก่กรรม"
                            onclick="motherDeceased()">
                        <label class="form-check-label" for="mDeceased">มารดาถึงแก่กรรม</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="mNotKnow" name="mdata"
                            value="ไม่ทราบข้อมูลมารดา" onclick="motherNotKnow()">
                        <label class="form-check-label" for="mDeceased">ไม่ทราบข้อมูลมารดา</label>
                    </div>
                </span>

                <div class="row pt-3">
                    <div class="mb-3 col-12 col-xl-12 m-form">
                        <label for="mCfname" class="form-label">คำนำหน้ามารดา <span class="impotant text-danger">*
                                (หากใช้ตำแหน่งทางวิชาการ/ยศ ให้ระบุคำเต็มงดใช้คำย่อ เช่น
                                รองศาสตราจารย์
                                ร้อยตำรวจเอกหญิง)</span></label>
                        <select class="form-control mNotKnow" id="mCfname" name="mCfname" autocomplete="off"
                            placeholder="คำนำหน้ามารดา"></select>
                    </div>
                    <div class="mb-3 col-12 col-xl-6 m-form">
                        <label for="mFname" class="form-label">ชื่อมารดาภาษาไทย <span class="impotant text-danger">*
                                ไม่ต้องระบุคำนำหน้าชื่อ</span></label>
                        <input type="text" class="form-control mNotKnow" id="mFname" name="mFname" autocomplete="off"
                            placeholder="ชื่อมารดาภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-6 m-form">
                        <label for="mLname" class="form-label">นามสกุลมารดาภาษาไทย <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control mNotKnow" id="mLname" name="mLname" autocomplete="off"
                            placeholder="นามสกุลมารดาภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-12 m-form">
                        <label for="mPIN" class="form-label">เลขประจำตัวประชาชน <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control PIN mNotKnow" id="mPIN" name="mPIN" autocomplete="off"
                            placeholder="X-XXXX-XXXXX-XX-X">
                        <!-- -->

                    </div>
                </div>
                <div class="row">
                    <div class="mb-3 col-12 col-xl-3 m-form">
                        <label for="mRace" class="form-label">เชื้อชาติ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control immotherdata" id="mRace" name="mRace" autocomplete="off"
                            placeholder="เชื้อชาติ">
                    </div>
                    <div class="mb-3 col-12 col-xl-3 m-form">
                        <label for="mNation" class="form-label">สัญชาติ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control immotherdata" id="mNation" name="mNation"
                            autocomplete="off" placeholder="สัญชาติ">
                    </div>
                    <div class="mb-3 col-12 col-xl-3 m-form">
                        <label for="mReligion" class="form-label">ศาสนา <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control immotherdata" id="mReligion" name="mReligion">
                            <!-- -->
                            <option disabled selected>โปรดเลือก</option>
                            <option value="พุทธ">พุทธ</option>
                            <option value="คริสต์">คริสต์</option>
                            <option value="อิสลาม">อิสลาม</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                            <option value="ไม่นับถือศาสนา">ไม่นับถือศาสนา</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4 m-form">
                        <label for="mBirthday" class="form-label">เกิดเมื่อวันที่ <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control immotherdata" id="mBirthday" name="mBirthday" autocomplete="off">
                            <!-- -->
                            <option disabled selected>โปรดเลือก</option>
                            <?php
                            for ($x = 1; $x <= 31; $x++) {
                                echo '<option value="' . $x . '">' . $x . '</option>';
                            }
                            ?>

                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4 m-form">
                        <label for="mBirthmonth" class="form-label">เดือน <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control immotherdata" id="mBirthmonth" name="mBirthmonth"
                            autocomplete="off">
                            <!-- -->
                            <option disabled selected>โปรดเลือก</option>
                            <option value="มกราคม">มกราคม</option>
                            <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                            <option value="มีนาคม">มีนาคม</option>
                            <option value="เมษายน">เมษายน</option>
                            <option value="พฤษภาคม">พฤษภาคม</option>
                            <option value="มิถุนายน">มิถุนายน</option>
                            <option value="กรกฎาคม">กรกฎาคม</option>
                            <option value="สิงหาคม">สิงหาคม</option>
                            <option value="กันยายน">กันยายน</option>
                            <option value="ตุลาคม">ตุลาคม</option>
                            <option value="พฤศจิกายน">พฤศจิกายน</option>
                            <option value="ธันวาคม">ธันวาคม</option>
                        </select>
                    </div>

                    <div class="mb-3 col-12 col-xl-4 m-form">
                        <label for="mBirthyear" class="form-label">พ.ศ. <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control immotherdata" id="mBirthyear" name="mBirthyear" autocomplete="off">
                            <!-- -->
                            <option disabled selected>โปรดเลือก</option>
                            <?php
                            for ($x = 2485; $x <= 2550; $x++) {
                                echo '<option value="' . $x . '">' . $x . '</option>';
                            }
                            ?>

                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4 m-form">
                        <label for="mOccu" class="form-label">อาชีพ <span class="impotant text-danger">*</span></label>
                        <select class="form-control immotherdata" id="mOccu" name="mOccu" autocomplete="off">
                            <!-- -->
                            <option disabled selected>โปรดเลือก</option>
                            <option value="ว่างงาน">ว่างงาน</option>
                            <option value="พ่อบ้าน/แม่บ้าน">พ่อบ้าน/แม่บ้าน</option>
                            <option value="บวช">บวช</option>
                            <option value="อาชีพอิสระ/รับจ้างทั่วไป">
                                อาชีพอิสระ/รับจ้างทั่วไป</option>
                            <option value="ช่างฝีมือ">ช่างฝีมือ</option>
                            <option value="เกษตรกร">เกษตรกร</option>
                            <option value="ค้าขาย">ค้าขาย</option>
                            <option value="เจ้าของกิจการ/ธุรกิจส่วนตัว">
                                เจ้าของกิจการ/ธุรกิจส่วนตัว</option>
                            <option value="อาจารย์">อาจารย์</option>
                            <option value="แพทย์/พยาบาล">แพทย์/พยาบาล</option>
                            <option value="พนักงานบริษัท">พนักงานบริษัท</option>
                            <option value="พนักงานรัฐวิสาหกิจ">พนักงานรัฐวิสาหกิจ
                            </option>
                            <option value="พนักงานรัฐวิสาหกิจบำนาญ">
                                พนักงานรัฐวิสาหกิจบำนาญ</option>
                            <option value="พนักงานราชการ">พนักงานราชการ</option>
                            <option value="ลูกจ้างส่วนราชการ">ลูกจ้างส่วนราชการ</option>
                            <option value="ข้าราชการ">ข้าราชการ</option>
                            <option value="ข้าราชการบำนาญ">ข้าราชการบำนาญ</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4 m-form">
                        <label for="mEarnings" class="form-label">รายได้ต่อเดือน
                            (บาท)</label>
                        <input type="text" class="form-control motherdata money" id="mEarnings" name="mEarnings"
                            autocomplete="off" placeholder="รายได้ต่อเดือน (บาท)">
                    </div>
                    <div class="mb-3 col-12 col-xl-9 m-form">
                        <label for="mWorkplace" class="form-label">สถานที่ทำงาน</label>
                        <input type="text" class="form-control motherdata" id="mWorkplace" name="mWorkplace"
                            autocomplete="off" placeholder="สถานที่ทำงาน">
                    </div>
                    <div class="mb-3 col-12 col-xl-3 m-form">
                        <label for="mWorkplaceTel" class="form-label">เบอร์โทรศัพท์ที่ทำงาน
                            (ถ้ามี)</label>
                        <input type="text" class="form-control motherdata HTel" id="mWorkplaceTel" name="mWorkplaceTel"
                            autocomplete="off" placeholder="0XX-XXX-XXX">
                    </div>
                    <div class="mb-3 col-12 col-xl-3 m-form">
                        <label for="mTel" class="form-label">เบอร์โทรศัพท์มือถือที่ติดต่อได้
                            (ถ้ามี)</label>
                        <input type="text" class="form-control motherdata Tel" id="mTel" name="mTel" autocomplete="off"
                            placeholder="0XX-XXX-XXXX">
                    </div>
                    <div class="mb-3 col-12 col-xl-9 m-form">
                        <label for="mMail" class="form-label">อีเมล์ (ถ้ามี)</label>
                        <input type="email" class="form-control motherdata" id="mMail" name="mMail" autocomplete="off"
                            placeholder="อีเมล์ (ถ้ามี)">
                    </div>
                    <div>
                        <h5 class="text-bold py-3">
                            ที่อยู่ปัจจุบันที่สามารถติดต่อได้ของมารดา
                        </h5>
                        <span class="py-3">
                            <div class="form-check form-check-inline m-form">
                                <input class="form-check-input" type="checkbox" id="msameAddress" name="msameAddress"
                                    value="ใช้ที่อยู่ปัจจุบันตามนักเรียน" onclick="motherSameAddress()" disabled>
                                <label class="form-check-label" for="msameAddress">ใช้ที่อยู่ปัจจุบันตามนักเรียน</label>
                            </div>
                        </span>
                    </div>
                    <div class="row pt-3">
                        <div class="mb-3 col-12 col-xl-2 m-form">
                            <label for="mHno" class="form-label">บ้านเลขที่ <span
                                    class="impotant text-danger"></span></label>
                            <input type="text" class="form-control immotherdata" id="mHno" name="mHno"
                                autocomplete="off" placeholder="บ้านเลขที่">
                        </div>
                        <div class="mb-3 col-12 col-xl-2 m-form">
                            <label for="mHmoo" class="form-label">หมู่ที่ <span
                                    class="impotant text-danger"></span></label>
                            <input type="text" class="form-control immotherdata" id="mHmoo" name="mHmoo"
                                autocomplete="off" placeholder="หมู่ที่">
                        </div>
                        <div class="mb-3 col-12 col-xl-4 m-form">
                            <label for="mHroad" class="form-label">ถนน</label>
                            <input type="text" class="form-control motherdata" id="mHroad" name="mHroad"
                                autocomplete="off" placeholder="ถนน">
                        </div>
                        <div class="mb-3 col-12 col-xl-4 m-form">
                            <label for="mHsoi" class="form-label">ตรอก/ซอย</label>
                            <input type="text" class="form-control motherdata" id="mHsoi" name="mHsoi"
                                autocomplete="off" placeholder="ตรอก/ซอย">
                        </div>
                        <div class="mb-3 col-12 col-xl-3 motherDeceased">
                            <label for="mHdistrict" class="form-label">ตำบล/แขวง <span
                                    class="impotant text-danger">*</span></label>
                            <input type="text" class="form-control" id="mHdistrict" name="mHdistrict" autocomplete="off"
                                placeholder="ตำบล/แขวง" readOnly>
                        </div>
                        <div class="mb-3 col-12 col-xl-3 motherDeceased">
                            <label for="mHamphoe" class="form-label">อำเภอ/เขต <span
                                    class="impotant text-danger">*</span></label>
                            <input type="text" class="form-control" id="mHamphoe" name="mHamphoe" autocomplete="off"
                                placeholder="อำเภอ/เขต" readOnly>
                        </div>
                        <div class="mb-3 col-12 col-xl-3 motherDeceased">
                            <label for="mHprovince" class="form-label">จังหวัด <span
                                    class="impotant text-danger">*</span></label>
                            <input type="text" class="form-control" id="mHprovince" name="mHprovince" autocomplete="off"
                                placeholder="จังหวัด" readOnly>
                        </div>
                        <div class="mb-3 col-12 col-xl-3 m-form">
                            <label for="mHzipcode" class="form-label">รหัสไปรษณีย์ <span
                                    class="impotant text-danger">*</span></label>
                            <input type="text" class="form-control zipcode" id="mHzipcode" name="mHzipcode"
                                autocomplete="off" placeholder="รหัสไปรษณีย์">
                        </div>
                        <div id="Mresults" class="list-group mt-10"></div>

                    </div>
                </div>

                <h5 class="text-bold py-3">
                    ข้อมูลด้านครอบครัว
                </h5>
                <p>สถานภาพของครอบครัว</p>
                <div class="pb-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sStatusFamily" id="inlineRadio1"
                            value="บิดา-มารดา อยู่ร่วมกัน">
                        <label class="form-check-label" for="inlineRadio1">บิดา-มารดา
                            อยู่ร่วมกัน</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sStatusFamily" id="inlineRadio2"
                            value="บิดา-มารดา แยกกันอยู่">
                        <label class="form-check-label" for="inlineRadio2">บิดา-มารดา
                            แยกกันอยู่</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sStatusFamily" id="inlineRadio3"
                            value="บิดา-มารดา หย่าร้างกัน">
                        <label class="form-check-label" for="inlineRadio3">บิดา-มารดา
                            หย่าร้างกัน</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sStatusFamily" id="inlineRadio4"
                            value="บิดาถึงแก่กรรม">
                        <label class="form-check-label" for="inlineRadio4">บิดาถึงแก่กรรม</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sStatusFamily" id="inlineRadio5"
                            value="มารดาถึงแก่กรรม">
                        <label class="form-check-label" for="inlineRadio5">มารดาถึงแก่กรรม</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sStatusFamily" id="inlineRadio6"
                            value="บิดา-มารดา ถึงแก่กรรม">
                        <label class="form-check-label" for="inlineRadio6">บิดา-มารดา
                            ถึงแก่กรรม</label>
                    </div>
                </div>

                <div class="row pt-3">
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="sBrosis" class="form-label">จำนวนพี่น้องรวมนักเรียน(คน)</label>
                        <input type="text" class="form-control" id="sBrosis" name="sBrosis" autocomplete="off"
                            placeholder="จำนวนพี่น้องรวมนักเรียน(คน)">
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="sNoSon" class="form-label">นักเรียนเป็นบุตรคนที่</label>
                        <input type="text" class="form-control" id="sNoSon" name="sNoSon" autocomplete="off"
                            placeholder="นักเรียนเป็นบุตรคนที่">
                    </div>
                </div>

                <h5 class="text-bold py-3">
                    ข้อมูลผู้ปกครอง
                </h5>
                <span class="py-3">
                    <div class="form-check form-check-inline fatherchoose">
                        <input class="form-check-input" type="radio" name="sParent" id="sParentf"
                            value="บิดาเป็นผู้ปกครอง" onclick="sPsamef()">
                        <label class="form-check-label" for="sParent">บิดาเป็นผู้ปกครอง</label>
                    </div>
                    <div class="form-check form-check-inline motherchoose">
                        <input class="form-check-input" type="radio" name="sParent" id="sParentm"
                            value="มารดาเป็นผู้ปกครอง" onclick="sPsamem()">
                        <label class="form-check-label" for="sParent">มารดาเป็นผู้ปกครอง</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sParent" id="sParento"
                            value="บุคคลอื่นเป็นผู้ปกครอง" onclick="sOtherp()">
                        <label class="form-check-label" for="sParent">บุคคลอื่นเป็นผู้ปกครอง
                            (กรณีที่ไม่ได้อยู่กับบิดา-มารดา)</label>
                    </div>
                </span>

                <div class="row pt-3">
                    <div class="mb-3 col-12 col-xl-12">
                        <label for="pCfname" class="form-label">คำนำหน้า <span class="impotant text-danger">*
                                (หากใช้ตำแหน่งทางวิชาการ/ยศ ให้ระบุคำเต็มงดใช้คำย่อ เช่น
                                รองศาสตราจารย์
                                ร้อยตำรวจเอก)</span></label>
                        <!-- <input type="text" class="form-control parentdata" id="pCfname" name="pCfname"
                            autocomplete="off" placeholder="คำนำหน้า"> -->
                        <select class="form-control parentdata" id="pCfname" name="pCfname" autocomplete="off"
                            placeholder="คำนำหน้า"></select>
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="pFname" class="form-label">ชื่อภาษาไทย <span class="impotant text-danger">*
                                ไม่ต้องระบุคำนำหน้าชื่อ</span></label>
                        <input type="text" class="form-control parentdata" id="pFname" name="pFname" autocomplete="off"
                            placeholder="ชื่อภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="pLname" class="form-label">นามสกุลภาษาไทย <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata" id="pLname" name="pLname" autocomplete="off"
                            placeholder="นามสกุลภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-12">
                        <label for="pPIN" class="form-label">เลขประจำตัวประชาชน <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata PIN" id="pPIN" name="pPIN" autocomplete="off"
                            placeholder="X-XXXX-XXXXX-XX-X">

                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pRace" class="form-label">เชื้อชาติ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata" id="pRace" name="pRace" autocomplete="off"
                            placeholder="เชื้อชาติ">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pNation" class="form-label">สัญชาติ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata" id="pNation" name="pNation"
                            autocomplete="off" placeholder="สัญชาติ">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pReligion" class="form-label">ศาสนา <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control parentdata" id="pReligion" name="pReligion">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="พุทธ">พุทธ</option>
                            <option value="คริสต์">คริสต์</option>
                            <option value="อิสลาม">อิสลาม</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                            <option value="ไม่นับถือศาสนา">ไม่นับถือศาสนา</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="pBirthday" class="form-label">เกิดเมื่อวันที่ <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control parentdata" id="pBirthday" name="pBirthday" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <?php
                            for ($x = 1; $x <= 31; $x++) {
                                echo '<option value="' . $x . '">' . $x . '</option>';
                            }
                            ?>

                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="pBirthmonth" class="form-label">เดือน <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control parentdata" id="pBirthmonth" name="pBirthmonth" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="มกราคม">มกราคม</option>
                            <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                            <option value="มีนาคม">มีนาคม</option>
                            <option value="เมษายน">เมษายน</option>
                            <option value="พฤษภาคม">พฤษภาคม</option>
                            <option value="มิถุนายน">มิถุนายน</option>
                            <option value="กรกฎาคม">กรกฎาคม</option>
                            <option value="สิงหาคม">สิงหาคม</option>
                            <option value="กันยายน">กันยายน</option>
                            <option value="ตุลาคม">ตุลาคม</option>
                            <option value="พฤศจิกายน">พฤศจิกายน</option>
                            <option value="ธันวาคม">ธันวาคม</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="pBirthyear" class="form-label">พ.ศ. <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control parentdata" id="pBirthyear" name="pBirthyear" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <?php
                            for ($x = 2485; $x <= 2550; $x++) {
                                echo '<option value="' . $x . '">' . $x . '</option>';
                            }
                            ?>

                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="pRelative" class="form-label">เกี่ยวข้องกับนักเรียนโดยเป็น
                            <span class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata" id="pRelative" name="pRelative"
                            autocomplete="off" placeholder="เกี่ยวข้องกับนักเรียนโดยเป็น">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="pOccu" class="form-label">อาชีพ <span class="impotant text-danger">*</span></label>
                        <select class="form-control parentdata" id="pOccu" name="pOccu" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="ว่างงาน">ว่างงาน</option>
                            <option value="พ่อบ้าน/แม่บ้าน">พ่อบ้าน/แม่บ้าน</option>
                            <option value="บวช">บวช</option>
                            <option value="อาชีพอิสระ/รับจ้างทั่วไป">
                                อาชีพอิสระ/รับจ้างทั่วไป</option>
                            <option value="ช่างฝีมือ">ช่างฝีมือ</option>
                            <option value="เกษตรกร">เกษตรกร</option>
                            <option value="ค้าขาย">ค้าขาย</option>
                            <option value="เจ้าของกิจการ/ธุรกิจส่วนตัว">
                                เจ้าของกิจการ/ธุรกิจส่วนตัว</option>
                            <option value="อาจารย์">อาจารย์</option>
                            <option value="แพทย์/พยาบาล">แพทย์/พยาบาล</option>
                            <option value="พนักงานบริษัท">พนักงานบริษัท</option>
                            <option value="พนักงานรัฐวิสาหกิจ">พนักงานรัฐวิสาหกิจ
                            </option>
                            <option value="พนักงานรัฐวิสาหกิจบำนาญ">
                                พนักงานรัฐวิสาหกิจบำนาญ</option>
                            <option value="พนักงานราชการ">พนักงานราชการ</option>
                            <option value="ลูกจ้างส่วนราชการ">ลูกจ้างส่วนราชการ</option>
                            <option value="ข้าราชการ">ข้าราชการ</option>
                            <option value="ข้าราชการบำนาญ">ข้าราชการบำนาญ</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="pEarnings" class="form-label">รายได้ต่อเดือน
                            (บาท)</label>
                        <input type="text" class="form-control parentdata money" id="pEarnings" name="pEarnings"
                            autocomplete="off" placeholder="รายได้ต่อเดือน (บาท)">
                    </div>
                    <div class="mb-3 col-12 col-xl-9">
                        <label for="pWorkplace" class="form-label">สถานที่ทำงาน <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata" id="pWorkplace" name="pWorkplace"
                            autocomplete="off" placeholder="สถานที่ทำงาน">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pWorkplaceTel" class="form-label">เบอร์โทรศัพท์ที่ทำงาน
                            (ถ้ามี)</label>
                        <input type="text" class="form-control parentdata HTel" id="pWorkplaceTel" name="pWorkplaceTel"
                            autocomplete="off" placeholder="0XX-XXX-XXX">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pTel" class="form-label">เบอร์โทรศัพท์มือถือที่ติดต่อได้
                            (จำเป็น)
                            <span class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata Tel" id="pTel" name="pTel" autocomplete="off"
                            placeholder="0XX-XXX-XXXX">
                    </div>
                    <div class="mb-3 col-12 col-xl-9">
                        <label for="pMail" class="form-label">อีเมล์ (ถ้ามี)</label>
                        <input type="email" class="form-control parentdata" id="pMail" name="pMail" autocomplete="off"
                            placeholder="อีเมล์ (ถ้ามี)">
                    </div>
                </div>
                <h5 class="text-bold py-3">
                    ที่อยู่ปัจจุบันที่สามารถติดต่อได้ของผู้ปกครอง
                </h5>
                <span class="py-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="sPsamef" name="sPsamef"
                            value="ใช้ที่อยู่ปัจจุบันตามนักเรียน" disabled>
                        <label class="form-check-label" for="sPsamef">ใช้ที่อยู่ปัจจุบันตามนักเรียน</label>
                    </div>
                </span>
                </h6>
                <div class="row pt-3">
                    <div class="mb-3 col-12 col-xl-2">
                        <label for="pHno" class="form-label">บ้านเลขที่ <span
                                class="impotant text-danger"></span></label>
                        <input type="text" class="form-control parentdata" id="pHno" name="pHno" autocomplete="off"
                            placeholder="บ้านเลขที่">
                    </div>
                    <div class="mb-3 col-12 col-xl-2">
                        <label for="pHmoo" class="form-label">หมู่ที่ <span class="impotant text-danger"></span></label>
                        <input type="text" class="form-control parentdata" id="pHmoo" name="pHmoo" autocomplete="off"
                            placeholder="หมู่ที่">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="pHroad" class="form-label">ถนน</label>
                        <input type="text" class="form-control parentdata" id="pHroad" name="pHroad" autocomplete="off"
                            placeholder="ถนน">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="pHsoi" class="form-label">ตรอก/ซอย</label>
                        <input type="text" class="form-control parentdata" id="pHsoi" name="pHsoi" autocomplete="off"
                            placeholder="ตรอก/ซอย">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pHdistrict" class="form-label">ตำบล/แขวง <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata" id="pHdistrict" name="pHdistrict"
                            autocomplete="off" placeholder="ตำบล/แขวง" readOnly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pHamphoe" class="form-label">อำเภอ/เขต <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata" id="pHamphoe" name="pHamphoe"
                            autocomplete="off" placeholder="อำเภอ/เขต" readOnly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pHprovince" class="form-label">จังหวัด <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata" id="pHprovince" name="pHprovince"
                            autocomplete="off" placeholder="จังหวัด" readOnly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="pHzipcode" class="form-label">รหัสไปรษณีย์ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control parentdata zipcode" id="pHzipcode" name="pHzipcode"
                            autocomplete="off" placeholder="รหัสไปรษณีย์">
                    </div>
                    <div id="Presults" class="list-group mt-10"></div>
                </div>
                <h5 class="text-bold py-3">
                    ข้อมูลด้านสุขภาพ
                </h5>
                <div class="row">
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="sBloodType" class="form-label">หมู่เลือด <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control" id="sBloodType" name="sBloodType">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="O">O</option>
                            <option value="AB">AB</option>
                        </select>
                    </div>

                    <div class="mb-3 col-12 col-xl-10">
                        <label for="sPoison" class="form-label">การแพ้พิษ
                            (ถ้ามี)</label>
                        <input type="text" class="form-control" id="sPoison" name="sPoison" autocomplete="off"
                            placeholder="การแพ้พิษ (ถ้ามี)">
                    </div>

                    <div class="mb-3 col-12 col-xl-10">
                        <label for="sDrug " class="form-label">การแพ้ยา (ถ้ามี)</label>
                        <input type="text" class="form-control" id="sDrug" name="sDrug" autocomplete="off"
                            placeholder="การแพ้ยา (ถ้ามี)">
                    </div>
                    <div class="mb-3 col-12 col-xl-10">
                        <label for="sFood" class="form-label">การแพ้อาหาร
                            (ถ้ามี)</label>
                        <input type="text" class="form-control" id="sFood" name="sFood" autocomplete="off"
                            placeholder="การแพ้อาหาร (ถ้ามี)">
                    </div>
                    <div class="mb-3 col-12 col-xl-10">
                        <label for="sSick" class="form-label">โรคประจำตัว
                            (ถ้ามี)</label>
                        <input type="text" class="form-control" id="sSick" name="sSick" autocomplete="off"
                            placeholder="โรคประจำตัว (ถ้ามี)">
                    </div>
                    <div class="mb-3 col-12 col-xl-10">
                        <label for="sDrugEat" class="form-label">ยาที่ต้องรับประทานเป็นประจำ
                            (ถ้ามี)</label>
                        <input type="text" class="form-control" id="sDrugEat" name="sDrugEat" autocomplete="off"
                            placeholder="ยาที่ต้องรับประทานเป็นประจำ (ถ้ามี)">
                    </div>
                    <div class="mb-3 col-12 col-xl-10">
                        <label for="sSurgery" class="form-label">ประวัติการเข้ารับการผ่าตัด
                            (ถ้ามี)</label>
                        <input type="text" class="form-control" id="sSurgery" name="sSurgery" autocomplete="off"
                            placeholder="ประวัติการเข้ารับการผ่าตัด (ถ้ามี)">
                    </div>
                    <div class="mb-3 col-12 col-xl-10">
                        <label for="sSickOther" class="form-label">ปัญหาสุขภาพอื่นๆ
                            (ถ้ามี)</label>
                        <input type="text" class="form-control" id="sSickOther" name="sSickOther" autocomplete="off"
                            placeholder="ปัญหาสุขภาพอื่นๆ (ถ้ามี)">
                    </div>
                </div>


                <h5 class="text-bold py-3">
                    ข้อมูลด้านการศึกษา
                </h5>

                <div class="row">
                    <div class="mb-3 col-12 col-xl-8">
                        <label for="sSch" class="form-label">จบการศึกษาชั้นประถมศึกษาปีที่
                            6/มัธยมศึกษาปีที่ 3
                            จากโรงเรียน <span class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control" id="sSch" name="sSch" autocomplete="off"
                            placeholder="จบการศึกษาชั้นประถมศึกษาปีที่ 6/มัธยมศึกษาปีที่ 3 จากโรงเรียน">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="sSchprovince" class="form-label">จังหวัด <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control" id="sSchprovince" name="sSchprovince" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <option value='กระบี่'>กระบี่</option>
                            <option value='กรุงเทพมหานคร'>กรุงเทพมหานคร</option>
                            <option value='กาญจนบุรี'>กาญจนบุรี</option>
                            <option value='กาฬสินธุ์'>กาฬสินธุ์</option>
                            <option value='กำแพงเพชร'>กำแพงเพชร</option>
                            <option value='ขอนแก่น'>ขอนแก่น</option>
                            <option value='จันทบุรี'>จันทบุรี</option>
                            <option value='ฉะเชิงเทรา'>ฉะเชิงเทรา</option>
                            <option value='ชลบุรี'>ชลบุรี</option>
                            <option value='ชัยนาท'>ชัยนาท</option>
                            <option value='ชัยภูมิ'>ชัยภูมิ</option>
                            <option value='ชุมพร'>ชุมพร</option>
                            <option value='เชียงราย'>เชียงราย</option>
                            <option value='เชียงใหม่'>เชียงใหม่</option>
                            <option value='ตรัง'>ตรัง</option>
                            <option value='ตราด'>ตราด</option>
                            <option value='ตาก'>ตาก</option>
                            <option value='นครนายก'>นครนายก</option>
                            <option value='นครปฐม'>นครปฐม</option>
                            <option value='นครพนม'>นครพนม</option>
                            <option value='นครราชสีมา'>นครราชสีมา</option>
                            <option value='นครศรีธรรมราช'>นครศรีธรรมราช</option>
                            <option value='นครสวรรค์'>นครสวรรค์</option>
                            <option value='นนทบุรี'>นนทบุรี</option>
                            <option value='นราธิวาส'>นราธิวาส</option>
                            <option value='น่าน'>น่าน</option>
                            <option value='บึงกาฬ'>บึงกาฬ</option>
                            <option value='บุรีรัมย์'>บุรีรัมย์</option>
                            <option value='ปทุมธานี'>ปทุมธานี</option>
                            <option value='ประจวบคีรีขันธ์'>ประจวบคีรีขันธ์</option>
                            <option value='ปราจีนบุรี'>ปราจีนบุรี</option>
                            <option value='ปัตตานี'>ปัตตานี</option>
                            <option value='พระนครศรีอยุธยา'>พระนครศรีอยุธยา</option>
                            <option value='พะเยา'>พะเยา</option>
                            <option value='พังงา'>พังงา</option>
                            <option value='พัทลุง'>พัทลุง</option>
                            <option value='พิจิตร'>พิจิตร</option>
                            <option value='พิษณุโลก'>พิษณุโลก</option>
                            <option value='เพชรบุรี'>เพชรบุรี</option>
                            <option value='เพชรบูรณ์'>เพชรบูรณ์</option>
                            <option value='แพร่'>แพร่</option>
                            <option value='ภูเก็ต'>ภูเก็ต</option>
                            <option value='มหาสารคาม'>มหาสารคาม</option>
                            <option value='มุกดาหาร'>มุกดาหาร</option>
                            <option value='แม่ฮ่องสอน'>แม่ฮ่องสอน</option>
                            <option value='ยโสธร'>ยโสธร</option>
                            <option value='ยะลา'>ยะลา</option>
                            <option value='ร้อยเอ็ด'>ร้อยเอ็ด</option>
                            <option value='ระนอง'>ระนอง</option>
                            <option value='ระยอง'>ระยอง</option>
                            <option value='ราชบุรี'>ราชบุรี</option>
                            <option value='ลพบุรี'>ลพบุรี</option>
                            <option value='ลำปาง'>ลำปาง</option>
                            <option value='ลำพูน'>ลำพูน</option>
                            <option value='เลย'>เลย</option>
                            <option value='ศรีสะเกษ'>ศรีสะเกษ</option>
                            <option value='สกลนคร'>สกลนคร</option>
                            <option value='สงขลา'>สงขลา</option>
                            <option value='สตูล'>สตูล</option>
                            <option value='สมุทรปราการ'>สมุทรปราการ</option>
                            <option value='สมุทรสงคราม'>สมุทรสงคราม</option>
                            <option value='สมุทรสาคร'>สมุทรสาคร</option>
                            <option value='สระแก้ว'>สระแก้ว</option>
                            <option value='สระบุรี'>สระบุรี</option>
                            <option value='สิงห์บุรี'>สิงห์บุรี</option>
                            <option value='สุโขทัย'>สุโขทัย</option>
                            <option value='สุพรรณบุรี'>สุพรรณบุรี</option>
                            <option value='สุราษฎร์ธานี'>สุราษฎร์ธานี</option>
                            <option value='สุรินทร์'>สุรินทร์</option>
                            <option value='หนองคาย'>หนองคาย</option>
                            <option value='หนองบัวลำภู'>หนองบัวลำภู</option>
                            <option value='อ่างทอง'>อ่างทอง</option>
                            <option value='อำนาจเจริญ'>อำนาจเจริญ</option>
                            <option value='อุดรธานี'>อุดรธานี</option>
                            <option value='อุตรดิตถ์'>อุตรดิตถ์</option>
                            <option value='อุทัยธานี'>อุทัยธานี</option>
                            <option value='อุบลราชธานี'>อุบลราชธานี</option>
                        </select>
                    </div>
                </div>
                <h6 class="py-3"><u>ผลการเรียนเฉลี่ย</u></h6>
                <div class="row">
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="sGPAm" class="form-label">ผลการเรียนเฉลี่ยรายวิชาคณิตศาสตร์
                            <span class="impotant text-danger"></span></label>
                        <input type="number" class="form-control grade" id="sGPAm" name="sGPAm" autocomplete="off"
                            placeholder="X.XX" min="3.00" step="0.01" max="4.00">
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="sGPAs" class="form-label">ผลการเรียนเฉลี่ยรายวิชาวิทยาศาสตร์
                            <span class="impotant text-danger"></span></label>
                        <input type="number" class="form-control grade" id="sGPAs" name="sGPAs" autocomplete="off"
                            placeholder="X.XX" min="3.00" step="0.01" max="4.00">
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="sGPA" class="form-label">ผลการเรียนเฉลี่ยรวมทุกรายวิชา <span
                                class="impotant text-danger"></span></label>
                        <input type="number" class="form-control grade" id="sGPA" name="sGPA" autocomplete="off"
                            placeholder="X.XX" min="3.00" step="0.01" max="4.00">
                    </div>
                </div>

                <h5 class="text-bold py-3">
                    ข้อมูลผู้ค้ำประกันสัญญา
                </h5>
                <div class="row">
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="conNo" class="form-label">สัญญาเลขที่ <span class="impotant text-danger">
                                *ไม่ต้องระบุ</span></label>
                        <input type="text" class="form-control" id="conNo" name="conNo" autocomplete="off"
                            placeholder="สัญญาเลขที่" readonly>
                    </div>
                </div>

                <h6 class="py-3"><u>ผู้ค้ำประกัน</u></h6>
                <span class="py-3">
                    <div class="form-check form-check-inline fatherchoose">
                        <input class="form-check-input" type="radio" name="sContract" id="sContractf"
                            value="บิดาเป็นผู้ค้ำประกัน" onclick="sConsamef()">
                        <label class="form-check-label" for="sContractf">บิดาเป็นผู้ค้ำประกัน</label>
                    </div>
                    <div class="form-check form-check-inline motherchoose">
                        <input class="form-check-input" type="radio" name="sContract" id="sContractm"
                            value="มารดาเป็นผู้ค้ำประกัน" onclick="sConsamem()">
                        <label class="form-check-label" for="sContractm">มารดาเป็นผู้ค้ำประกัน</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sContract" id="sContracto"
                            value="บุคคลอื่นเป็นผู้ค้ำประกัน" onclick="sOthercon()">
                        <label class="form-check-label" for="sContracto">บุคคลอื่นเป็นผู้ค้ำประกัน
                            (กรณีที่ไม่ได้อยู่กับบิดา-มารดา) <span class="impotant text-danger">*
                                กรุณาแจ้งเจ้าหน้าที่</span></label>
                    </div>
                </span>
                <div class="row pt-3">
                    <div class="mb-3 col-12 col-xl-12">
                        <label for="conCfname" class="form-label">คำนำหน้า <span class="impotant text-danger">*
                                (หากใช้ตำแหน่งทางวิชาการ/ยศ ให้ระบุคำเต็มงดใช้คำย่อ เช่น
                                รองศาสตราจารย์
                                ร้อยตำรวจเอก)</span></label>
                        <select class="form-control contractdata" id="conCfname" name="conCfname" autocomplete="off"
                            placeholder="คำนำหน้า"></select>
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="conFname" class="form-label">ชื่อภาษาไทย <span class="impotant text-danger">*
                                ไม่ต้องระบุคำนำหน้าชื่อ</span></label>
                        <input type="text" class="form-control contractdata" id="conFname" name="conFname"
                            autocomplete="off" placeholder="ชื่อภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-6">
                        <label for="conLname" class="form-label">นามสกุลภาษาไทย <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control contractdata" id="conLname" name="conLname"
                            autocomplete="off" placeholder="นามสกุลภาษาไทย">
                    </div>
                    <div class="mb-3 col-12 col-xl-12">
                        <label for="conPIN" class="form-label">เลขประจำตัวประชาชน <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control contractdata PIN" id="conPIN" name="conPIN"
                            autocomplete="off" placeholder="X-XXXX-XXXXX-XX-X">

                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="conRelative" class="form-label">เกี่ยวข้องกับนักเรียนโดยเป็น
                            <span class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control contractdata" id="conRelative" name="conRelative"
                            autocomplete="off" placeholder="เกี่ยวข้องกับนักเรียนโดยเป็น">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="conOccu" class="form-label">อาชีพ <span
                                class="impotant text-danger">*</span></label>
                        <select class="form-control contractdata" id="conOccu" name="conOccu" autocomplete="off">
                            <option disabled selected>โปรดเลือก</option>
                            <option value="ว่างงาน">ว่างงาน</option>
                            <option value="พ่อบ้าน/แม่บ้าน">พ่อบ้าน/แม่บ้าน</option>
                            <option value="บวช">บวช</option>
                            <option value="อาชีพอิสระ/รับจ้างทั่วไป">
                                อาชีพอิสระ/รับจ้างทั่วไป</option>
                            <option value="ช่างฝีมือ">ช่างฝีมือ</option>
                            <option value="เกษตรกร">เกษตรกร</option>
                            <option value="ค้าขาย">ค้าขาย</option>
                            <option value="เจ้าของกิจการ/ธุรกิจส่วนตัว">
                                เจ้าของกิจการ/ธุรกิจส่วนตัว</option>
                            <option value="อาจารย์">อาจารย์</option>
                            <option value="แพทย์/พยาบาล">แพทย์/พยาบาล</option>
                            <option value="พนักงานบริษัท">พนักงานบริษัท</option>
                            <option value="พนักงานรัฐวิสาหกิจ">พนักงานรัฐวิสาหกิจ
                            </option>
                            <option value="พนักงานรัฐวิสาหกิจบำนาญ">
                                พนักงานรัฐวิสาหกิจบำนาญ</option>
                            <option value="พนักงานราชการ">พนักงานราชการ</option>
                            <option value="ลูกจ้างส่วนราชการ">ลูกจ้างส่วนราชการ</option>
                            <option value="ข้าราชการ">ข้าราชการ</option>
                            <option value="ข้าราชการบำนาญ">ข้าราชการบำนาญ</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="conEarnings" class="form-label">รายได้ต่อเดือน
                            (บาท)</label>
                        <input type="text" class="form-control contractdata money" id="conEarnings" name="conEarnings"
                            autocomplete="off" placeholder="รายได้ต่อเดือน (บาท)">
                    </div>
                    <div class="mb-3 col-12 col-xl-9">
                        <label for="conWorkplace" class="form-label">สถานที่ทำงาน</label>
                        <input type="text" class="form-control contractdata" id="conWorkplace" name="conWorkplace"
                            autocomplete="off" placeholder="สถานที่ทำงาน">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="conWorkplaceTel" class="form-label">เบอร์โทรศัพท์ที่ทำงาน
                            (ถ้ามี)</label>
                        <input type="text" class="form-control contractdata HTel" id="conWorkplaceTel"
                            name="conWorkplaceTel" autocomplete="off" placeholder="0XX-XXX-XXX">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="conTel" class="form-label">เบอร์โทรศัพท์มือถือที่ติดต่อได้
                            (ถ้ามี)</label>
                        <input type="text" class="form-control contractdata Tel" id="conTel" name="conTel"
                            autocomplete="off" placeholder="0XX-XXX-XXXX">
                    </div>
                    <div class="mb-3 col-12 col-xl-9">
                        <label for="conMail" class="form-label">อีเมล์ (ถ้ามี)</label>
                        <input type="email" class="form-control contractdata" id="conMail" name="conMail"
                            autocomplete="off" placeholder="อีเมล์ (ถ้ามี)">
                    </div>
                </div>
                <h5 class="text-bold py-3">
                    ที่อยู่ปัจจุบันที่สามารถติดต่อได้ของผู้ค้ำประกัน
                </h5>
                <div class="row">
                    <div class="mb-3 col-12 col-xl-2">
                        <label for="conHno" class="form-label">บ้านเลขที่ <span
                                class="impotant text-danger"></span></label>
                        <input type="text" class="form-control contractdata" id="conHno" name="conHno"
                            autocomplete="off" placeholder="บ้านเลขที่">
                    </div>
                    <div class="mb-3 col-12 col-xl-2">
                        <label for="conHmoo" class="form-label">หมู่ที่ <span
                                class="impotant text-danger"></span></label>
                        <input type="text" class="form-control contractdata" id="conHmoo" name="conHmoo"
                            autocomplete="off" placeholder="หมู่ที่">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="conHroad" class="form-label">ถนน</label>
                        <input type="text" class="form-control contractdata" id="conHroad" name="conHroad"
                            autocomplete="off" placeholder="ถนน">
                    </div>
                    <div class="mb-3 col-12 col-xl-4">
                        <label for="conHsoi" class="form-label">ตรอก/ซอย</label>
                        <input type="text" class="form-control contractdata" id="conHsoi" name="conHsoi"
                            autocomplete="off" placeholder="ตรอก/ซอย">
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="conHdistrict" class="form-label">ตำบล/แขวง <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control contractdata" id="conHdistrict" name="conHdistrict"
                            autocomplete="off" placeholder="ตำบล/แขวง" readOnly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="conHamphoe" class="form-label">อำเภอ/เขต <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control contractdata" id="conHamphoe" name="conHamphoe"
                            autocomplete="off" placeholder="อำเภอ/เขต" readOnly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="conHprovince" class="form-label">จังหวัด <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control contractdata" id="conHprovince" name="conHprovince"
                            autocomplete="off" placeholder="จังหวัด" readOnly>
                    </div>
                    <div class="mb-3 col-12 col-xl-3">
                        <label for="conHzipcode" class="form-label">รหัสไปรษณีย์ <span
                                class="impotant text-danger">*</span></label>
                        <input type="text" class="form-control contractdata zipcode" id="conHzipcode" name="conHzipcode"
                            autocomplete="off" placeholder="รหัสไปรษณีย์">
                    </div>
                    <div id="conresults" class="list-group mt-10"></div>

                </div>
                <button class="btn btn-success" id="submit-form" type="button">บันทึกข้อมูล</button>
                <div class="pt-3"></div>
            </form>
        </div>
    </div>



    <!-- ///ตัวอย่างค้นหาตำบล -->
    <!-- <div class="container">
        <h5 class="py-2 text-main">ตัวอย่างค้นหาตำบล</h5>
        <div class="row pt-3">
            <div class="form-group col-12 col-lg-8">
                <label>รหัสไปรษณีย์ <b class="text-danger">*</b></label>
                <div class="input-group mb-3">
                    <input type="text" name="sHzipcodeTest" id="sHzipcodeTest" class="form-control check3"
                        placeholder="รหัสไปรษณีย์"="" autocomplete="off">
                    <div class="input-group-append">
                        <button class="btn btn-info" type="button">ค้นหา</button>
                    </div>
                </div>

                <div id="results" class="list-group mt-3"></div>
            </div>
        </div>
        <div class="row">
            <div class="form-group col-12 col-lg-10">
                <label>หมู่บ้าน/อาคาร/ตึก</label>
                <input type="email" name="sPlace" id="sPlace" class="form-control" placeholder="หมู่บ้าน/อาคาร/ตึก"
                   ="" autocomplete="off">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-12 col-lg-2">
                <label>เลขที่</label>
                <input type="text" name="sHno" id="sHno" class="form-control" placeholder="เลขที่"=""
                    autocomplete="off">
            </div>
            <div class="form-group col-5 col-lg-2">
                <label>หมู่ที่</label>
                <input type="text" name="sHmoo" id="sHmoo" class="form-control" placeholder="หมู่ที่"=""
                    autocomplete="off">
            </div>
            <div class="form-group col-7 col-lg-4">
                <label>ซอย</label>
                <input type="text" name="sHsoi" id="sHsoi" class="form-control" placeholder="ซอย"=""
                    autocomplete="off">
            </div>
            <div class="form-group col-12 col-lg-4">
                <label>ถนน</label>
                <input type="text" name="sHroad" id="sHroad" class="form-control" placeholder="ถนน"=""
                    autocomplete="off">
            </div>
        </div> -->
    </div>

    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script type="module" src="/dist/index.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>

    <!-- จัดรูปแบบตัวเลข -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <script type="text/typescript">

    </script>
    <script>
    $('.PIN').mask('0-0000-00000-00-0');
    $('.Tel').mask('000-000-0000');
    $('.zipcode').mask('00000');
    $('.HTel').mask('000-000-000');
    $('.grade').mask('0.00');
    // let formdata


    // $.ajax({
    //     type: 'POST',
    //     url: '../api/registerController', // url ที่จะส่งไปบันทึก
    //     data: formdata,
    //     success: function(response) {
    //         response = JSON.parse(response);
    //         console.log(response);
    //     },
    //     error: function() {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'เกิดข้อผิดพลาด!',
    //             text: 'โปรดดำเนินการในภายหลัง',
    //             allowOutsideClick: false,
    //             position: 'top'
    //         });
    //     }
    // });
    // <! 
    // var resultsContainer = $('#results');

    // $('#sHzipcodeTest').on('keyup', function () {
    //     var sHzipcode = $(this).val();
    //     if (sHzipcode.length >= 5) {
    //         $.ajax({
    //             type: 'GET',
    //             url: 'https://apply.pcshs.ac.th/Admission/register/searchtumbons',
    //             data: {
    //                 sHzipcode: sHzipcode
    //             },
    //             success: function (data) {
    //                 var results = JSON.parse(data);

    //                 console.log(results);
    //                 resultsContainer.empty(); // ล้างผลลัพธ์ก่อนหน้า

    //                 if (results.length > 0) {
    //                     resultsContainer.append('<div class="list-group-item result-header"><h6 class="m-0 d-flex justify-content-between">ผลการค้นหา <span>พบ ' + results.length + ' สถานที่</span></h6></div>');
    //                     results.forEach(function (result) {
    //                         // เน้นคำค้นหาในผลลัพธ์
    //                         var regex = new RegExp('(' + sHzipcode + ')', 'gi');
    //                         var sHzipcodeResult = result.sHzipcode.replace(regex, '<span class="highlight">$1</span>');

    //                         sHzipcodeResult = 'รหัสไปรษณีย์ ' + sHzipcodeResult;

    //                         if (result.sHprovince == "กรุงเทพมหานคร") {
    //                             sAddress = 'แขวง' + result.sHtambon + ' เขต' + result.sHamphoe + ' ' + result.sHprovince + ' ' + result.sHzipcode;
    //                         } else {
    //                             sAddress = 'ต.' + result.sHtambon + ' อ.' + result.sHamphoe + ' จ.' + result.sHprovince + ' ' + result.sHzipcode;
    //                         }

    //                         // สร้าง HTML สำหรับแสดงผล
    //                         sHtambon = "'" + result.sHtambon + "'";
    //                         sHamphoe = "'" + result.sHamphoe + "'";
    //                         sHprovince = "'" + result.sHprovince + "'";
    //                         sHzipcode = result.sHzipcode;

    //                         var listItem = $('<div></div>')
    //                             .addClass('list-group-item list-group-item-action');
    //                         var listItem2 = $('<div onclick="addressSelect(' + result.ID + ',' + result.sHzipcode + ',' + sHtambon + ',' + sHamphoe + ',' + sHprovince + ')"></div>')
    //                             .addClass('row cursor-pointer');
    //                         var select = $('<div class="d-flex justify-content-center px-3"><img src="https://www.mytcas.com/img/i/i-yes.svg" alt="Yes Icon" width="24"></div>')
    //                             .addClass('');
    //                         var schools = $('<div></div>')
    //                             .addClass('col px-0');

    //                         var nameContainer = $('<div></div>')
    //                             .addClass('result-name')
    //                             .html(sHzipcodeResult);

    //                         var provinceContainer = $('<div></div>')
    //                             .addClass('result-province')
    //                             .html(sAddress);

    //                         schools.append(nameContainer, provinceContainer);
    //                         listItem2.append(select, schools);
    //                         listItem.append(listItem2);

    //                         resultsContainer.append(listItem);
    //                     });
    //                 } else {
    //                     resultsContainer.append('<div class="list-group-item result-header"><h5 class="m-0 d-flex justify-content-between">ผลการค้นหา</h5></div>');
    //                     resultsContainer.append('<div class="list-group-item list-group-item-action">ไม่พบรหัสไปรษณีย์</div>');
    //                 }
    //             }
    //         });
    //     } else {
    //         resultsContainer.empty();
    //     }
    // }); -->
    </script>
    <style>
    input[readonly] {
        background-color: var(--bs-secondary-bg)
    }

    input[readonly]:focus {
        background-color: var(--bs-secondary-bg)
    }

    option[disabled] {
        background-color: var(--bs-secondary-bg)
    }
    </style>
</body>

</html>
