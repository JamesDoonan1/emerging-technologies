from testbook import testbook

@testbook("trigrams.ipynb", execute=True)
def test_clean_text(tb):
    # Access the clean_text function from the notebook
    clean_text = tb.get("clean_text")
    assert clean_text("Hello, World!") == "HELLO WORLD"
    assert clean_text("This   is\na test.") == "THIS IS A TEST."
    assert clean_text("1234!@#$") == ""

@testbook("trigrams.ipynb", execute=True)
def test_build_trigram_model(tb):
    build_trigram_model = tb.get("build_trigram_model")
    model = build_trigram_model("HELLO WORLD")
    assert model == {"HEL": 1, "ELL": 1, "LLO": 1, "LO ": 1, "O W": 1, " WO": 1, "WOR": 1, "ORL": 1, "RLD": 1}

