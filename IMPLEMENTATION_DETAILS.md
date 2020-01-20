# LSTM UI REST API Project Implementation Details

**LSTM UI REST API** is a **Django** project. It has the next file structure:

```
├── api
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── migrations
    ├── models.py
    ├── serializers.py
    ├── tests.py
    └── views.py
├── EXAMPLE HTTP REQUESTS
    ├── POST_EVENT_LOG.txt
    └── POST_RUNNING_CASE.txt
├── input_files
    ├── ConsultaDataMining201618.csv
    ├── Production.csv
    ├── PurchasingExample.csv
    ├── ConsultaDataMining201618.xes.gz
    ├── Production.xes.gz
    └── PurchasingExample.xes.gz
├── lstm_ui_REST_API
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
├── support_modules
    ├── nn_support.py
    ├── readers
        └── log_reader.py
    ├── role_discovery.py
    └── support.py
├── IMAGE.png
├── event_log_services.py
└── manage.py
```

Django projects have **apps**. This project has one app: **api**.
