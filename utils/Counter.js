const Counter = {

    addedImages: 0,
    uploadedImages: 0,

    get getAddedImages() {
        return this.addedImages
    },
    get getUploadedImages() {
        return this.uploadedImages
    },

    set setAddedImages(count) {
        this.addedImages = count
    },
    set setUploadedImages(count) {
        this.uploadedImages = count
    }

}

export default Counter