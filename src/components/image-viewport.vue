<template>
  <div class="container">
    <div ref="image-viewport" id="image-id">医学影像成像平台</div>
  </div>
</template>

<script>
import * as cornerstone from "cornerstone-core";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import dicomParser from "dicom-parser";
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
export default {
  name: "ImageViewport",
  props: {
    msg: String,
  },
  mounted() {
    var exampleImageId = "dicomweb://localhost:3000/dicom1.dcm";
    console.log("imageids:", exampleImageId);
    var element = document.getElementById("image-id");

    // Injects cornerstone "enabled" canvas into DOM
    cornerstone.enable(element);

    // Load & Display
    cornerstone.loadImage(exampleImageId).then(function (image) {
      console.log("加载的图像对象:", image);
      // Now that we've "loaded" the image, we can display it on
      // our Cornerstone enabled element of choice
      cornerstone.displayImage(element, image);

      // We can now set some viewport parameters
      // and use them to update the element
      var viewport = {
        invert: false,
        pixelReplication: false,
        voi: {
          windowWidth: 400,
          windowCenter: 200,
        },
        scale: 1.4,
        translation: {
          x: 0,
          y: 0,
        },
        //colormap: 'hot'
      };

      cornerstone.setViewport(element, viewport);
      cornerstone.updateImage(element);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#image-id {
  width: 800px;
  height: 800px;
  border: 2px solid red;
}
</style>
