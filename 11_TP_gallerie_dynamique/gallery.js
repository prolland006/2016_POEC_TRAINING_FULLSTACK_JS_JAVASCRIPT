function Item (title, url, originalPage) {
    this.title = title;
    this.url = url;
    this.originalPage = originalPage;
}

function buildGalleryHTML(items, containerCSSSelector) {
    let galleryHTML =
        `<div class="gallery">
        ${ items.reduce((html, item) => {
            return html + buildGalleryItemHTML(item)
        }, '')}
    </div>`;
    document.querySelector(containerCSSSelector).innerHTML = galleryHTML;
}

function buildGalleryItemHTML(item) {
    return `<a href="${item.originalPage}" class="gallery__item">
                <img class="gallery__item__image" src="${item.url}" >
                <p class="gallery__item__title" >${ellipsis(item.title, 15)}</p>
            </a>`
}

let items = [
    new Item("look into the end of the earth", "https://farm1.staticflickr.com/744/23499298192_1fe6b05a0e_z_d.jpg", "https://www.flickr.com/photos/90975693@N05/23499298192/in/photolist-BNy3DE-pdSwyu-nxhrTX-dV6Zy1-deuBKt-92uiJ2-oyMtoi-G79nNs-gUmhJx-zRS9rj-FNikHR-Dehc8V-7RFL1k-suEJDN-pscHVG-pzVtoB-qni9D5-kf7A6w-rAMJ6d-qSTh3o-q51CvW-p4jzYK-dMf6QA-DSqqGk-rNBdxA-584Fte-w3tmUf-u6vBZ4-cfNXkd-qKwFue-ai2Q6U-kf5XxT-rAu3Jb-e4qh69-qJxNEy-7eTcFc-p1BRPQ-CztMC7-u8JpYA-pHqpDc-nhee95-J53Ci8-r2RQTg-pHXtCk-o2VKNc-8iE4Zj-a9nbDK-pdSwsC-ehqp2r-jweENe"),
    new Item("untitled", "https://farm6.staticflickr.com/5599/15241862020_d90cdef7ef_z_d.jpg", "https://www.flickr.com/photos/auspices/15241862020/in/photolist-pdSwyu-nxhrTX-dV6Zy1-deuBKt-92uiJ2-oyMtoi-G79nNs-gUmhJx-zRS9rj-FNikHR-Dehc8V-7RFL1k-suEJDN-pscHVG-pzVtoB-qni9D5-kf7A6w-rAMJ6d-qSTh3o-q51CvW-p4jzYK-dMf6QA-DSqqGk-rNBdxA-584Fte-w3tmUf-u6vBZ4-cfNXkd-qKwFue-ai2Q6U-kf5XxT-rAu3Jb-e4qh69-qJxNEy-7eTcFc-p1BRPQ-CztMC7-u8JpYA-pHqpDc-nhee95-J53Ci8-r2RQTg-pHXtCk-o2VKNc-8iE4Zj-a9nbDK-pdSwsC-ehqp2r-jweENe-rE7dwQ"),
    new Item("Iceland Landscape","https://farm2.staticflickr.com/1688/24435474119_e3eb892220_z_d.jpg", "https://www.flickr.com/photos/lennykphotography/24435474119/in/photolist-Dehc8V-7RFL1k-suEJDN-pscHVG-pzVtoB-qni9D5-kf7A6w-rAMJ6d-qSTh3o-q51CvW-p4jzYK-dMf6QA-DSqqGk-rNBdxA-584Fte-w3tmUf-u6vBZ4-cfNXkd-qKwFue-ai2Q6U-kf5XxT-rAu3Jb-e4qh69-qJxNEy-7eTcFc-p1BRPQ-CztMC7-u8JpYA-pHqpDc-nhee95-J53Ci8-r2RQTg-pHXtCk-o2VKNc-8iE4Zj-a9nbDK-pdSwsC-ehqp2r-jweENe-rE7dwQ-rQZN9T-oVbqnh-gWD8Dq-ggQ6n1-cd6XCL-92ujmH-cF6Uuh-fSBScz-cDcXis-Nmtie"),
    new Item("Lumpy Landscape","https://farm4.staticflickr.com/3815/10437767843_6d07525a25_z_d.jpg", "https://www.flickr.com/photos/dun_deagh/10437767843/in/photolist-gUmhJx-zRS9rj-FNikHR-Dehc8V-7RFL1k-suEJDN-pscHVG-pzVtoB-qni9D5-kf7A6w-rAMJ6d-qSTh3o-q51CvW-p4jzYK-dMf6QA-DSqqGk-rNBdxA-584Fte-w3tmUf-u6vBZ4-cfNXkd-qKwFue-ai2Q6U-kf5XxT-rAu3Jb-e4qh69-qJxNEy-7eTcFc-p1BRPQ-CztMC7-u8JpYA-pHqpDc-nhee95-J53Ci8-r2RQTg-pHXtCk-o2VKNc-8iE4Zj-a9nbDK-pdSwsC-ehqp2r-jweENe-rE7dwQ-rQZN9T-oVbqnh-gWD8Dq-ggQ6n1-cd6XCL-92ujmH-cF6Uuh"),
    new Item("White landscape","https://farm5.staticflickr.com/4069/4500406315_5a726ae601_z_d.jpg", "https://www.flickr.com/photos/randihausken/4500406315/in/photolist-7RFL1k-suEJDN-pscHVG-pzVtoB-qni9D5-kf7A6w-rAMJ6d-qSTh3o-q51CvW-p4jzYK-dMf6QA-DSqqGk-rNBdxA-584Fte-w3tmUf-u6vBZ4-cfNXkd-qKwFue-ai2Q6U-kf5XxT-rAu3Jb-e4qh69-qJxNEy-7eTcFc-p1BRPQ-CztMC7-u8JpYA-pHqpDc-nhee95-J53Ci8-r2RQTg-pHXtCk-o2VKNc-8iE4Zj-a9nbDK-pdSwsC-ehqp2r-jweENe-rE7dwQ-rQZN9T-oVbqnh-gWD8Dq-ggQ6n1-cd6XCL-92ujmH-cF6Uuh-fSBScz-cDcXis-Nmtie-pSmWKp"),
    new Item("Iceland","https://farm8.staticflickr.com/7412/16328391906_5645a821d2_z_d.jpg", "https://www.flickr.com/photos/paszczak000/16328391906/in/photolist-qSTh3o-q51CvW-p4jzYK-dMf6QA-DSqqGk-rNBdxA-584Fte-w3tmUf-u6vBZ4-cfNXkd-qKwFue-ai2Q6U-kf5XxT-rAu3Jb-e4qh69-qJxNEy-7eTcFc-p1BRPQ-CztMC7-u8JpYA-pHqpDc-nhee95-J53Ci8-r2RQTg-pHXtCk-o2VKNc-8iE4Zj-a9nbDK-pdSwsC-ehqp2r-jweENe-rE7dwQ-rQZN9T-oVbqnh-gWD8Dq-ggQ6n1-cd6XCL-92ujmH-cF6Uuh-fSBScz-cDcXis-Nmtie-pSmWKp-seGVGx-cF6RZW-e1oBPu-F4PTKk-rfkUh6-98uWjq-pihMXR"),
    new Item("AAA013","https://farm6.staticflickr.com/5507/12630176853_eb183bb445_z_d.jpg", "https://www.flickr.com/photos/parramitta/12630176853/in/photolist-kf5XxT-rAu3Jb-e4qh69-qJxNEy-7eTcFc-p1BRPQ-CztMC7-u8JpYA-pHqpDc-nhee95-J53Ci8-r2RQTg-pHXtCk-o2VKNc-8iE4Zj-a9nbDK-pdSwsC-ehqp2r-jweENe-rE7dwQ-rQZN9T-oVbqnh-gWD8Dq-ggQ6n1-cd6XCL-92ujmH-cF6Uuh-fSBScz-cDcXis-Nmtie-pSmWKp-seGVGx-cF6RZW-e1oBPu-F4PTKk-rfkUh6-98uWjq-pihMXR-oUMWcE-nfbQCw-92xqE1-3nGn1J-agwSoa-jVayxP-ejsnYT-84iRrU-nctPh9-4riMn4-5N3wze-qfs3Y6"),
    new Item("Small cabin", "https://farm6.staticflickr.com/5651/23893623086_545fa74245_z_d.jpg", "https://www.flickr.com/photos/kishikawa_g3/23893623086/in/photolist-Cpp4GJ-fBaUTX-qCC5fd-gJJZoA-rrnYLg-ci6hCq-fLYDma-GhHoTa-skfGV7-pPtj8P-pM254X-ptpbFP-iZvPQN-mJLv69-oQSZ6K-pKEv26-pzhHnH-nvS5kC-nbMKBS-qrCqC8-cF6UWQ-fz1d3x-hM6Bio-fd5woB-qzgv81-gDNLxh-cJy9Rf-pgvCY1-fquGBb-ux27wE-s9oqgb-rjSbzj-hAFTK9-o3p3vN-oVjqBR-hm7amZ-pdKsTA-nBAEA5-E7zErx-nD7vT7-DrG1s3-2Y5c2L-raFch8-ejyGKc-6uEAxA-phLYUM-6aWx5R-9iWp13-cGHyzf-nQ6zGH"),
    new Item("abiqua","https://farm9.staticflickr.com/8237/8571324282_3cc0dcfdcb_z_d.jpg", "https://www.flickr.com/photos/49580580@N02/8571324282/in/photolist-e4qh69-qJxNEy-7eTcFc-p1BRPQ-CztMC7-u8JpYA-pHqpDc-nhee95-J53Ci8-r2RQTg-pHXtCk-o2VKNc-8iE4Zj-a9nbDK-pdSwsC-ehqp2r-jweENe-rE7dwQ-rQZN9T-oVbqnh-gWD8Dq-ggQ6n1-cd6XCL-92ujmH-cF6Uuh-fSBScz-cDcXis-Nmtie-pSmWKp-seGVGx-cF6RZW-e1oBPu-F4PTKk-rfkUh6-98uWjq-pihMXR-oUMWcE-nfbQCw-92xqE1-3nGn1J-agwSoa-jVayxP-ejsnYT-84iRrU-nctPh9-4riMn4-5N3wze-qfs3Y6-ncz3p2-qzjGY5")
];

buildGalleryHTML(items, '.gallery-section');