import os
import shutil
import base64
import io
from PIL import Image

cardi_pub = r"c:\Users\User\Documents\Dim area\cardi revamp\cardi main\public"
aiagent_pub = r"c:\Users\User\Documents\Dim area\cardi revamp\aiagent main\public"
gdrive_dir = r"c:\Users\User\Documents\Dim area\cardi revamp\cardi main\gdrive_downloads_cardi"

source_terbaru = os.path.join(gdrive_dir, "Logo Cardi", "TERBARU")

# Target folders for cardi logos
target_cardi_dirs = [
    os.path.join(cardi_pub, "logos", "cardi"),
    os.path.join(aiagent_pub, "logos", "cardi")
]

for d in target_cardi_dirs:
    os.makedirs(os.path.join(d, "raw"), exist_ok=True)

# 1. Process 43.png -> Horizontal Logo & public/logocardi.png
img_43 = Image.open(os.path.join(source_terbaru, "43.png")).convert("RGBA")
bbox_43 = img_43.getbbox()
logo_horizontal = img_43.crop(bbox_43) # 1024x299

# Save to public/logocardi.png
logocardi_path = os.path.join(cardi_pub, "logocardi.png")
logo_horizontal.save(logocardi_path, "PNG", optimize=True)
print(f"Updated: {logocardi_path} (Size: {logo_horizontal.size})")

# Also save to aiagent public/logocardi.png if it exists or needs it
aiagent_logocardi_path = os.path.join(aiagent_pub, "logocardi.png")
logo_horizontal.save(aiagent_logocardi_path, "PNG", optimize=True)
print(f"Updated: {aiagent_logocardi_path} (Size: {logo_horizontal.size})")

# Save horizontal to logos/cardi/
for d in target_cardi_dirs:
    shutil.copy2(os.path.join(source_terbaru, "43.png"), os.path.join(d, "raw", "43.png"))
    out = os.path.join(d, "logo-cardi-horizontal.png")
    logo_horizontal.save(out, "PNG", optimize=True)
    print(f"Saved: {out}")

# 2. Extract Flower Symbol Only from 43.png
# In 43.png, the flower is on the left
flower_crop_box = (bbox_43[0], bbox_43[1], bbox_43[0] + 300, bbox_43[3])
flower_sub = img_43.crop(flower_crop_box)
flower_bbox = flower_sub.getbbox()
flower_icon = flower_sub.crop(flower_bbox) # ~292x298
for d in target_cardi_dirs:
    out = os.path.join(d, "icon-cardi-flower.png")
    flower_icon.save(out, "PNG", optimize=True)
    print(f"Saved: {out} (Size: {flower_icon.size})")

# 3. Process 41.png -> Stacked Logo
img_41 = Image.open(os.path.join(source_terbaru, "41.png")).convert("RGBA")
bbox_41 = img_41.getbbox()
logo_stacked = img_41.crop(bbox_41)
for d in target_cardi_dirs:
    shutil.copy2(os.path.join(source_terbaru, "41.png"), os.path.join(d, "raw", "41.png"))
    out = os.path.join(d, "logo-cardi-stacked.png")
    logo_stacked.save(out, "PNG", optimize=True)
    print(f"Saved: {out} (Size: {logo_stacked.size})")

# 4. Process 42.png -> White Stacked Logo
img_42 = Image.open(os.path.join(source_terbaru, "42.png")).convert("RGBA")
bbox_42 = img_42.getbbox()
logo_white = img_42.crop(bbox_42)
for d in target_cardi_dirs:
    shutil.copy2(os.path.join(source_terbaru, "42.png"), os.path.join(d, "raw", "42.png"))
    out = os.path.join(d, "logo-cardi-white.png")
    logo_white.save(out, "PNG", optimize=True)
    print(f"Saved: {out} (Size: {logo_white.size})")

# 5. Process 40.png -> Circle Badge App Icon
img_40 = Image.open(os.path.join(source_terbaru, "40.png")).convert("RGBA")
bbox_40 = img_40.getbbox()
icon_circle = img_40.crop(bbox_40)
for d in target_cardi_dirs:
    shutil.copy2(os.path.join(source_terbaru, "40.png"), os.path.join(d, "raw", "40.png"))
    out = os.path.join(d, "icon-cardi-circle.png")
    icon_circle.save(out, "PNG", optimize=True)
    print(f"Saved: {out} (Size: {icon_circle.size})")

# 6. Generate Favicons and Web Manifest Icons from 40.png
# apple-touch-icon.png (180x180)
ati = icon_circle.resize((180, 180), Image.Resampling.LANCZOS)
ati.save(os.path.join(cardi_pub, "apple-touch-icon.png"), "PNG", optimize=True)
print("Updated apple-touch-icon.png (180x180)")

# favicon-96x96.png (96x96)
fav96 = icon_circle.resize((96, 96), Image.Resampling.LANCZOS)
fav96.save(os.path.join(cardi_pub, "favicon-96x96.png"), "PNG", optimize=True)
print("Updated favicon-96x96.png (96x96)")

# web-app-manifest-192x192.png
wam192 = icon_circle.resize((192, 192), Image.Resampling.LANCZOS)
wam192.save(os.path.join(cardi_pub, "web-app-manifest-192x192.png"), "PNG", optimize=True)
print("Updated web-app-manifest-192x192.png (192x192)")

# web-app-manifest-512x512.png
wam512 = icon_circle.resize((512, 512), Image.Resampling.LANCZOS)
wam512.save(os.path.join(cardi_pub, "web-app-manifest-512x512.png"), "PNG", optimize=True)
print("Updated web-app-manifest-512x512.png (512x512)")

# favicon.ico (multi-resolution 16, 32, 48, 64)
icon_circle.save(
    os.path.join(cardi_pub, "favicon.ico"),
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64)]
)
print("Updated favicon.ico")

# favicon.svg with embedded 512x512 high-res PNG base64
buffer = io.BytesIO()
wam512.save(buffer, format="PNG")
b64_str = base64.b64encode(buffer.getvalue()).decode('utf-8')
svg_content = f'<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><image width="512" height="512" href="data:image/png;base64,{b64_str}"/></svg>\n'
with open(os.path.join(cardi_pub, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(svg_content)
print("Updated favicon.svg")

# 7. Process other sub-brand folders:
sub_brands = [
    ("Logo Cardi Nusantara", "cardi-nusantara"),
    ("Logo Cardi Branding", "cardi-branding"),
    ("Logo Cardi Digital", "cardi-digital"),
]

for src_folder, slug in sub_brands:
    src_p = os.path.join(gdrive_dir, src_folder)
    if os.path.exists(src_p):
        for base_pub in [cardi_pub, aiagent_pub]:
            target_p = os.path.join(base_pub, "logos", slug)
            os.makedirs(os.path.join(target_p, "raw"), exist_ok=True)
            for f in os.listdir(src_p):
                fp = os.path.join(src_p, f)
                shutil.copy2(fp, os.path.join(target_p, "raw", f))
                # Also save standard copy
                shutil.copy2(fp, os.path.join(target_p, f))
            print(f"Processed sub-brand: {slug} in {target_p}")

print("\nAll Cardi logos successfully processed and updated!")
