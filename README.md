# Forecasting Airline Miles Using Exponential Smoothing in Python

## Overview
This project aims to forecast monthly airline miles traveled using various time series forecasting techniques, with a focus on Exponential Smoothing methods. The dataset used for this analysis spans from 1996 to 2005, containing monthly records of airline miles. The primary objective was to explore different models and select the one that best fits the data for accurate future forecasting.

## Table of Contents
- [Overview](#overview)
- [Dataset](#dataset)
- [Methodology](#methodology)
  - [Exponential Smoothing](#exponential-smoothing)
  - [Exploratory Data Analysis (EDA)](#exploratory-data-analysis-eda)
  - [Decomposition](#decomposition)
  - [Model Selection](#model-selection)
  - [Final Model](#final-model)
- [Results](#results)
- [Conclusions](#conclusions)

## Dataset
The dataset consists of monthly airline miles traveled from January 1996 to May 2005. This data is sourced from a Udemy course, providing a practical application of time series forecasting techniques.

## Methodology

### Exponential Smoothing
Exponential Smoothing is a time series forecasting method for univariate data. It is particularly effective for data that exhibits trends and seasonality. There are three main types:
1. **Simple Exponential Smoothing**: Used when data has no trend or seasonality.
2. **Holt’s Linear Trend Model**: Extends simple exponential smoothing to capture linear trends.
3. **Holt-Winters Seasonal Model**: Incorporates both trend and seasonal components, suitable for data with both trends and seasonality.

### Exploratory Data Analysis (EDA)
- **Trend Analysis**: The time series plot showed a clear upward trend, indicating a general increase in airline miles traveled over time.
- **Seasonality**: A repeating pattern within each year suggested the presence of seasonality, likely tied to holiday or vacation periods.
- **Non-Stationarity**: The variability in the data increased over time, indicating the need for a model that accounts for both trend and seasonality.

### Decomposition
The time series was decomposed into its components using both Multiplicative and Additive models:
- **Multiplicative Decomposition**: Suitable when seasonal fluctuations increase or decrease with the level of the series.
- **Additive Decomposition**: Suitable when seasonal variations are constant throughout the series.
  
The Multiplicative model showed more consistent residuals, indicating a better fit for this dataset.

### Model Selection
Based on the ACF and PACF plots, the Holt-Winters method was selected as it effectively incorporates both trend and seasonal components. Four variations were tested:
1. **Additive Trend with Additive Seasonality**
2. **Additive Trend with Multiplicative Seasonality**
3. **Multiplicative Trend with Additive Seasonality**
4. **Multiplicative Trend with Multiplicative Seasonality**

### Final Model
The model with Multiplicative Trend and Multiplicative Seasonality performed the best across all evaluation metrics (MAE, RMSE, MAPE) and was selected as the final model for forecasting future airline miles.

## Results
The final model predicted the airline miles for the next 12 months with high accuracy, closely following the original time series patterns. This model's predictions are reliable and provide valuable insights into future trends.

**Evaluation Metrics for the Best Model:**
- **MAE**: 877,575.16
- **RMSE**: 1,075,653.07
- **MAPE**: 1.80%

## Conclusions
The Multiplicative Trend and Multiplicative Seasonality model (Holt-Winters) was the most effective in capturing the complex patterns in the airline miles data. This project demonstrated the importance of model selection and evaluation in time series forecasting, highlighting the value of using the correct combination of trend and seasonal components.
