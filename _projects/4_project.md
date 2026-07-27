---
layout: page
title: Predicting CyberSecurity threats
description: This project predicts cybersecurity threats trained on network intrusion detection dataset.
img: assets/img/cyber.jpg
importance: 7
redirect: https://github.com/Shuraimi/Predicting-cyber-threats-using-UNSW-NB15-dataset
category: ML DL
---
This project showcases a CyberSecurity threat prediction model which is trained on network intrusion detection dataset.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cybersecurity.png" title="CyberSecurity Threats" class="img-fluid rounded z-depth-1" %}
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
