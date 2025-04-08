f1-race-predictor/
│
├── data/
│   ├── raw/                # Original Kaggle CSVs
│   ├── processed/          # Cleaned & joined data
│
├── notebooks/
│   └── eda.ipynb           # Exploration & visualizations
│
├── scripts/
│   ├── fetch_ergast.py     # Pulls latest data from Ergast API
│   ├── clean_kaggle.py     # Cleans and merges Kaggle data
│   └── build_dataset.py    # Combines Kaggle + Ergast into one dataset
│
├── models/
│   └── baseline_model.py   # First attempt ML model
│
├── README.md
