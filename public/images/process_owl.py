from rembg import remove
from PIL import Image
import numpy as np
import sys

inp_path = r'c:\Users\Luca\Desktop\antigravity\trendseek\blog\public\images\owl-logo.png'
out_path = r'c:\Users\Luca\Desktop\antigravity\trendseek\blog\public\images\owl-logo.png'

try:
    inp = Image.open(inp_path)
    # The image is not transparent, convert to RGBA first to be safe
    inp = inp.convert("RGBA")
    out = remove(inp)
    
    data = np.array(out)
    if data.shape[-1] == 4:
        non_empty_columns = np.where(data[:,:,3].max(axis=0) > 0)[0]
        non_empty_rows = np.where(data[:,:,3].max(axis=1) > 0)[0]
        if len(non_empty_columns) > 0 and len(non_empty_rows) > 0:
            cropBox = (min(non_empty_columns), min(non_empty_rows), max(non_empty_columns)+1, max(non_empty_rows)+1)
            out = out.crop(cropBox)
    
    out.save(out_path)
    print("Owl logo perfectly mapped and transparent bg.")
except Exception as e:
    print(f"Error processing image: {e}")
    sys.exit(1)
