import os
import rss_collector as collector
def initialize_training_file(name):
  data_dir = './testdata/'
  if not os.path.exists(data_dir):
      os.makedirs(data_dir)
  out = open(data_dir + name + '.csv', 'w')
  return out

def run_training(output_file):
  # get user age and gender first
  age = raw_input("Enter age: ")
  gender = raw_input("Enter gender: ")

  training_data = collector.get_rss_data()
  for entry in training_data:
    source_name,articles = entry
    print("Now looking at articles for: " + source_name)
    for article in articles:
      title,link,tags = article
      print (title)
      print (tags)
      answer = raw_input("Do you like this article? (1 or 0): ")
      output_file.write(str(answer)+","+str(age)+","+gender+","+str(tags)+"\n")

  output_file.close()

output_file = initialize_training_file('jon')
run_training(output_file)

