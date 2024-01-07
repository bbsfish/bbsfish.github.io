# LineLedger
## API
### レコードの追加
#### 概要
|CATEGORY|VALUE|
|--------|-----|
|METHOD|POST|
|PATH|https://script.google.com/macros/s/AKfycbxJxIQdVcJu5IG4_uvmy0gRNaLeCtTn79WklEYZCcjLfGaUJT39EQU4QyjzK3p26AtY/exec|


|KEY|VALUE|概要|
|---|---|---|
|`access_key`|String|[AccessKeyList](#access-key-list) の値|
|`targetrow`|Object(JSON)|[TargetRowFormatSample](#target-row-format-sample)|

#### Target Row Format Sample
```
{
    id: "1HIQSD3D1",
    update: "2023/01/06 10:00:00",
    date: "2023/01/06 10:00:00",
    value: 1000,
    shop: "foo",
    data_type: "var",
    expense_for: "hogehoge",
    comment: "abcabc",
    gnlc_symbol: "A",
    written: "0"
}
```

### レコードの取得
#### 概要
|CATEGORY|VALUE|
|--------|-----|
|METHOD|GET|
|PATH|https://script.google.com/macros/s/AKfycbxJxIQdVcJu5IG4_uvmy0gRNaLeCtTn79WklEYZCcjLfGaUJT39EQU4QyjzK3p26AtY/exec|


|KEY|VALUE|概要|
|---|---|---|
|`access_key`|String|[AccessKeyList](#access-key-list) の値|
|`year`|Int|取得年|
|`month`|Int|取得月|

### Access Key List
Name: `access_key`
|KEY|PERMISSION|
|---|----------|
|Yl1zS0QkY67UxSaV6EzkhRaLJpsCZaw_|rw|