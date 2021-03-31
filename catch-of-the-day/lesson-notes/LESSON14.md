# Loading data into state onClick

Instead of manually entering all elements when loading the page, we can make a "Load Sample Fishes" button to do it for us.

I wanted to use the addFish method and iterate over the sample fishes instead of making a whole new method just for loading up our sample fishes, but that turned into a timesuck. I think it was because fish get added by default with a key equal to the current timestamp, and all the fish got added during the same millisecond, so all with the same timestamp.
