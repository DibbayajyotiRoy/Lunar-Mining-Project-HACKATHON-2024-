import tensorflow as tf
from tensorflow import keras
import pandas as pd
from matplotlib import pyplot as plt
import numpy as np
get_ipython().run_line_magic('matplotlib', 'inline')


# In[4]:


df = pd.read_csv(r"C:\Users\KALPITA ROY\Documents\BDR-70017 Final.csv")
df.sample(5)


# In[5]:


def print_unique_col_values(df):
  for column in df:
    if df[column].dtypes=='object':
      print(f'{column} : {df[column].unique()}')

print_unique_col_values(df)


# In[6]:


# df['grain'].replace({'coarse':1, 'Fine':0})
df['grain'] = df['grain'].replace({'coarse': 1, 'Fine': 0})
df['grain'].unique()


# In[7]:


df.dtypes


# In[8]:


df.head(10)


# In[9]:


cols_to_scale=['Wavelength (nm)','Reflectance','Variation','grain']

from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
df[cols_to_scale] = scaler.fit_transform(df[cols_to_scale])


# In[10]:


df.head(10)


# In[24]:


#save the scaler immediately after creating the scaler with .fit

import pickle

with open('scaler_agu-21_7pm(2).pkl', 'wb') as file:
    pickle.dump(scaler, file)


# In[25]:


X = df[['Wavelength (nm)','Reflectance', 'Variation', 'grain']]
Y = df['element']
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)


# In[26]:


X_train.shape,X_test.shape


# In[27]:


Y_train.shape,Y_test.shape


# In[28]:


from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

clf = RandomForestClassifier(random_state=42)

# Train the model
clf.fit(X_train, Y_train)

# Make predictions
Y_pred = clf.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(Y_test, Y_pred)
report = classification_report(Y_test, Y_pred)

print(f"Accuracy: {accuracy}")
print(f"Classification Report:\n{report}")


# In[29]:


import pickle

# Save the model to a file
with open('model_aug-21_7pm(2).pkl', 'wb') as file:
    pickle.dump(clf, file)

# scaler was saved previous tabs scroll up and find


# In[30]:


import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
import pickle

# Define the inference function
def predict_with_model(loaded_model, loaded_scaler, X_columns, input_data):

    input_data=input_data[X_columns]
    if 'grain' in input_data.columns:
        input_data['grain']= input_data['grain'].map({'coarse':1, 'Fine':0})
    input_data.fillna(0,inplace=True)
    # Scale the other columns
    input_data_scaled = loaded_scaler.transform(input_data)
    predictions = loaded_model.predict(input_data_scaled)

    return predictions


# In[33]:


# Load the trained model and scaler from files
with open(r"C:\Users\KALPITA ROY\model_aug-21_7pm(2).pkl", 'rb') as file:
    loaded_model = pickle.load(file)

with open(r"C:\Users\KALPITA ROY\scaler_agu-21_7pm(2).pkl", 'rb') as file:
    loaded_scaler = pickle.load(file)
sample_data = pd.DataFrame({
    'Wavelength (nm)': [305, 1960,1890],
    'Reflectance': [0.066849999, 0.58285,0.380780011],
    'Variation': [0.00187, 0.0008,0.00379],
    'grain': ["coarse", "coarse",'Fine']
})

# List of feature columns used during training
X_columns = ['Wavelength (nm)', 'Reflectance', 'Variation', 'grain']

# Make predictions
predictions = predict_with_model(loaded_model, loaded_scaler, X_columns, sample_data)
print(predictions)