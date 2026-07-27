---
layout: page
title: Diabetic Retinopathy Grading
description: This project is trained to detect Diabetic Retinopathy severity levels using DenseNet121 given a retina / fundus image
img: assets/img/diabetic.htm
importance: 3
category: ML DL
redirect: https://diabetic-retinopathy-detection-densenet121.streamlit.app/
giscus_comments: false
---

This project showcases a Pokemon classifier which is trained on approx 120 images each of the 120 unique Pokemons in the latest generation and trained using resnet101 and fastai.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pokemon2.png" title="pokemon Gen 9" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image contains all the different types of Pokemon images of Generation 9.
</div>

## Project Overview

This project classifies an image given as input into one of the 120 classes its trained on.

### How data was collected?

The images of Pokemons were downloaded using DuckDuckGo and then placed into separate folder for each Pokemon. I then manually cleaned each folder to remove any irrelevant or duplicate images and so that each folder contained only the relevant images of each Pokemon.

### How the model was trained?

The images were then trained on different versions of ResNet architectures such as resnet34, resnet50, and resnet101 using the fastai library. The resnet101 model achieved the best performance on the validation set.

### Technologies used?

- Fastai
- PyTorch
- ResNet

## Demo

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/video/pokeDemo.gif" title="pokemon Gen 9" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Trying out image examples on the web app.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/video/poekmonDemo2.gif" title="pokemon Gen 9" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Uploading input image to the web app.
</div>
<div class="d-flex justify-content-center my-4">
  <a style="background-color: var(--global-theme-color); color: white;" class="btn btn-primary" href="https://huggingface.co/spaces/shuraimi/Pokemon-Gen-9-Classifier" role="button">
    Try it out!
  </a>
</div>



